<template>
  <div class="v-container" :class="currentEditorMode">
    <textarea
      name="editor"
      id="editor"
    >
    </textarea>

    <markdown-docs v-if="currentEditorMode === DOCS" />
    <div
      v-else
      ref="output"
      class="v-output"
      :class="{ 'v-d-none': isEditorShown }"
      v-html="convertedHTML"
    >
    </div>
  </div>
  <Button
    :icon="isEditorShown ? 'pi pi-eye' : 'pi pi-eye-slash'"
    @click="toggleView"
    class="v-eye p-button-rounded p-button-outlined"
  />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { CHANGE_CONTENT_BY_FILE_NAME } from '@/store/mutations-types';

import Button from 'primevue/button';
import converter from '../../libs/showdown';
import createEditor from '../../libs/CodeMirror';
import MarkdownDocs from './MarkdownDocs.vue';
import {
  DOCS, MARKDOWN, READER,
} from './editorModes.js';

export default {
  name: 'VEditor',
  components: {
    MarkdownDocs,
    Button,
  },
  data() {
    return {
      convertedHTML: '',
      DOCS,
      // for 960px>screens
      isEditorShown: true,
    };
  },
  mounted() {
    this.editor = createEditor('editor');
    this.editor.on('scroll', (cm) => {
      if (!this.getEditorSettings.syncScroll) return;
      const scrolledPercent = cm.getScrollInfo().top / cm.getScrollInfo().height;
      if (this.$refs.output) {
        this.$refs.output.scrollTop = this.$refs.output.scrollHeight * scrolledPercent;
      }
    });

    this.editor.on('changes', (cm) => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.convertedHTML = converter(cm.getValue());
        this.CHANGE_CONTENT_BY_FILE_NAME({ name: this.currentFileName, content: cm.getValue() });
      }, 400);
    });

    try {
      this.setEditorContent();
    } catch (err) {
      this.$router.push({
        name: '404Resource',
        params: { resource: 'file' },
      });
    }

    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'UPDATE_CONTENT_BY_FILE_NAME') {
        this.setEditorContent(state.files.allFiles[this.currentFileName]);
      }
    });
  },
  unmounted() {
    this.unsubscribe();
  },
  computed: {
    ...mapGetters(['getContentByFileName', 'getEditorMode', 'getEditorSettings']),
    currentFileName() {
      return this.$route.params.name;
    },
    currentEditorMode() {
      switch (this.getEditorMode) {
        case MARKDOWN:
          return 'md-mode';
        case READER:
          return 'reader-mode';
        default:
          return this.getEditorMode;
      }
    },
  },
  methods: {
    ...mapMutations([CHANGE_CONTENT_BY_FILE_NAME]),
    setEditorContent(content = this.getContentByFileName(this.currentFileName)) {
      this.editor.getDoc().setValue(content);
    },
    toggleView() {
      this.isEditorShown = !this.isEditorShown;
      if (this.isEditorShown) {
        this.editor.getWrapperElement().style.display = 'block';
      } else {
        this.editor.getWrapperElement().style.display = 'none';
      }
    },
  },
  watch: {
    $route: {
      handler() {
        try {
          // TODO: fix
          if (this.$route.path !== '/') {
            this.setEditorContent();
          }
        } catch (err) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'file' },
          });
        }
      },
      deep: true,
    },
  },
};
</script>

<style src="./outputStyles.css" scoped></style>
<style scoped>
.v-container {
  display: flex;
  background-color: var(--surface-200);
  gap: 5px;
  padding: 5px;
  height: 100%;
}

.v-output, :deep(.CodeMirror) {
  width: 50%;
  height: 100%;
}

:deep(.CodeMirror) {
  font-size: 1rem;
}

.v-output {
  overflow: auto;
  border: 1px solid #eee;
  padding: 10px;
  background-color: var(--bluegray-50);
  margin: 0 auto;
}

.v-output::-webkit-scrollbar {
  width: .5rem;
}

.v-output::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 3px
}

.v-eye {
  display: none;
  position: absolute;
  right: 15px;
  bottom: 25px;
  z-index: 1000;
}

/* MODES */
.md-mode :deep(.CodeMirror) {
  width: 100%;
}
.md-mode .v-output {
  display: none;
  box-shadow: none;
}

.reader-mode :deep(.CodeMirror) {
  display: none;
}
.reader-mode .v-output {
  width: 80%;
  box-shadow: 2px 3px 8px #000;
}
.reader-mode.v-container {
  background-color: #dddddd;
}
/* /MODES */

@media screen and (max-width: 960px) {
  .v-output, :deep(.CodeMirror) {
    width: 100%;
    height: 100%;
  }

  .v-d-none {
    display: none;
  }

  .v-eye {
    display: block;
  }
}
</style>
