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
  DOCS, MARKDOWN, READER, DEFAULT,
} from './editorModes.js';
import getEditToolbarItems from './editorToolbarItems';

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
          ],
        },
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: getEditToolbarItems(this.$route.params.name),
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
