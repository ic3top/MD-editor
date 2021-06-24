<template>
  <div class="v-wrapper">
    <Menubar :model="items" />
  </div>

  <new-file-dialog
    v-model:visible="displayNewFileDialog"
    @createNewFile="createNewFile"
  />
  <settings-dialog
    v-model:visible="displaySettingsDialog"
    :editor-settings="getEditorSettings"
    @applySettings="applySettings"
  />
  <confirm-dialog :draggable="false" />
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import {
  DELETE_FILE,
  CREATE_NEW_FILE,
  CHANGE_EDITOR_MODE,
  UPDATE_EDITOR_SETTINGS,
} from '@/store/mutations-types';

import Menubar from 'primevue/menubar';
import ConfirmDialog from 'primevue/confirmdialog';
import newFileDialog from '../../components/newFileDialog.vue';
import settingsDialog from '../../components/settingsDialog.vue';
import {
  DOCS, MARKDOWN, READER, HTML, DEFAULT,
} from './editorModes.js';
import {
  bold,
  italic,
  strikethrough,
  image,
  quote,
  code,
  link,
  taskList,
  unOrderedList,
  orderedList,
  table,
  heading,
} from './editorToolbarCommands';

export default {
  name: 'VMenubar',
  components: {
    Menubar,
    ConfirmDialog,
    newFileDialog,
    settingsDialog,
  },
  data() {
    return {
      displayNewFileDialog: false,
      displaySettingsDialog: false,
      newConverterSettings: {},
      items: [
        {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'All files',
              icon: 'pi pi-fw pi-folder',
              // TODO: not reactive in case of creating a new file
              items: this.$store.getters.getFileItems,
            },
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              command: () => {
                this.displayNewFileDialog = true;
              },
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash',
              command: (event) => {
                this.$confirm.require({
                  target: event.originalEvent.currentTarget,
                  header: 'Confirmation',
                  message: 'Are you sure you want to proceed?',
                  icon: 'pi pi-exclamation-triangle',
                  accept: () => {
                    this.DELETE_FILE({ name: this.$route.params.name });
                    this.$router.push({ name: 'Home' });
                  },
                });
              },
            },
            {
              separator: true,
            },
            {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link',
            },
            {
              label: 'Import',
              icon: 'pi pi-fw pi-upload',
            },
          ],
        },
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'heading',
              command: () => heading(this.$route.params.name),
            },
            {
              label: 'bold',
              command: () => bold(this.$route.params.name),
            },
            {
              label: 'italic',
              command: () => italic(this.$route.params.name),
            },
            {
              label: 'strikethrough',
              command: () => strikethrough(this.$route.params.name),
            },
            {
              label: 'image',
              icon: 'pi pi-fw pi-image',
              command: () => image(this.$route.params.name),
            },
            {
              label: 'quote',
              command: () => quote(this.$route.params.name),
            },
            {
              label: 'code',
              command: () => code(this.$route.params.name),
            },
            {
              label: 'link',
              icon: 'pi pi-fw pi-link',
              command: () => link(this.$route.params.name),
            },
            {
              label: 'table',
              icon: 'pi pi-fw pi-table',
              command: () => table(this.$route.params.name),
            },
            {
              label: 'list',
              icon: 'pi pi-fw pi-list',
              items: [
                {
                  label: 'unordered',
                  command: () => unOrderedList(this.$route.params.name),
                },
                {
                  label: 'ordered',
                  command: () => orderedList(this.$route.params.name),
                },
                {
                  label: 'tasks',
                  command: () => taskList(this.$route.params.name),
                },
              ],
            },
          ],
        },
        {
          label: 'View',
          icon: 'pi pi-fw pi-eye',
          items: [
            {
              label: 'Reader',
              icon: 'pi pi-fw pi-book',
              command: () => {
                this.CHANGE_EDITOR_MODE({ mode: READER });
              },
            },
            {
              label: 'Editor',
              icon: 'pi pi-fw pi-window-maximize',
              command: () => {
                this.CHANGE_EDITOR_MODE({ mode: MARKDOWN });
              },
            },
            {
              label: 'Default',
              icon: 'pi pi-fw pi-window-minimize',
              command: () => {
                this.CHANGE_EDITOR_MODE({ mode: DEFAULT });
              },
            },
            {
              label: 'Markdown docs',
              icon: 'pi pi-fw pi-list',
              command: () => {
                this.CHANGE_EDITOR_MODE({ mode: DOCS });
              },
            },
            {
              label: 'Unparsed HTML',
              command: () => {
                this.CHANGE_EDITOR_MODE({ mode: HTML });
              },
            },
          ],
        },
        {
          label: 'Settings',
          icon: 'pi pi-fw pi-cog',
          command: () => {
            this.displaySettingsDialog = true;
          },
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off',
          command: () => {
            this.$router.push({ name: 'Home' });
          },
        },
      ],
    };
  },
  methods: {
    ...mapMutations([DELETE_FILE, CREATE_NEW_FILE, CHANGE_EDITOR_MODE, UPDATE_EDITOR_SETTINGS]),
    createNewFile(newFileName) {
      this.CREATE_NEW_FILE({ name: newFileName });
      this.displayNewFileDialog = false;
      this.$router.push(`/files/${newFileName}`);
    },
    applySettings(newEditorSettings) {
      this.UPDATE_EDITOR_SETTINGS(newEditorSettings);
      this.displaySettingsDialog = false;
    },
  },
  computed: {
    ...mapGetters(['getEditorSettings']),
  },
};
</script>

<style scoped>
.v-wrapper {
  padding: 5px;
  background-color: var(--surface-200);
}
:deep(.p-submenu-list) {
  z-index: 10!important;
}
</style>
