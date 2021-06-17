<template>
  <div class="container">
    <textarea
      name="editor"
      id="editor"
    >
    </textarea>
    <div ref="output" class="v-output" v-html="convertedHTML"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import converter from '../../libs/showdown';
import createEditor from '../../libs/CodeMirror';

export default {
  name: 'VEditor',
  data() {
    return {
      convertedHTML: '',
    };
  },
  mounted() {
    this.editor = createEditor('editor');
    this.editor.on('scroll', (cm) => {
      const scrolledPercent = cm.getScrollInfo().top / cm.getScrollInfo().height;
      this.$refs.output.scrollTop = this.$refs.output.scrollHeight * scrolledPercent;
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
      this.editor.getDoc().setValue(this.getContentByFileName(this.currentFileName));
    } catch (err) {
      this.$router.push({
        name: '404Resource',
        params: { resource: 'file' },
      });
    }
  },
  computed: {
    ...mapGetters(['getContentByFileName']),
    currentFileName() {
      return this.$route.params.name;
    },
  },
  methods: {
    ...mapMutations(['CHANGE_CONTENT_BY_FILE_NAME']),
  },
  watch: {
    $route: {
      handler() {
        try {
          // TODO: fix
          if (this.$route.path !== '/') {
            this.editor.getDoc().setValue(this.getContentByFileName(this.currentFileName));
          }
        } catch (err) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'SHEET' },
          });
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  background-color: var(--surface-200);
  gap: 5px;
  padding: 5px;
  height: calc(100vh - 76px);
}

.v-output, :deep(.CodeMirror) {
  height: 100%;
  width: 50%;
}

:deep(.CodeMirror) {
  font-size: 1rem;
}

.v-output {
  overflow: auto;
  border: 1px solid #eee;
  padding: 10px;
  background-color: var(--bluegray-50);
}

.v-output::-webkit-scrollbar {
  width: .5rem;
}

.v-output::-webkit-scrollbar-track {
}

.v-output::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 3px
}

.v-output :deep(pre) {
  white-space: pre-wrap;
  background-color: #f8f8f8;
  border: 1px solid #dfdfdf;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  padding: 0.125rem 0.3125rem 0.0625rem;
}

.v-output :deep(code) {
  background-color: transparent;
  border: 0;
  padding: 0;
}

.v-output :deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
  font-family: 'Old Standard TT', serif;
  font-weight: bold;
  color: #222;
  line-height: 1.4;
  margin: 0.5rem 0;
  text-rendering: optimizeLegibility;
}

.v-output:deep(h3) {
  border-bottom: 1px solid #ddd;
}

.v-output:deep(p) {
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.v-output:deep(a) {
  color: #008CBA;
  line-height: inherit;
  text-decoration: none;
}

.v-output :deep(ul), :deep(ol), :deep(dl) {
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.6;
  list-style-position: outside;
  margin-left: 1em;
}

.v-output :deep(blockquote) {
  padding: 0.5625rem 1.25rem 0 1.1875rem;
  border-left: 1px solid #ddd;
  line-height: 1.6;
  color: #6f6f6f;
}
</style>
