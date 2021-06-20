<template>
  <div class="v-wrapper">
    <Menubar :model="items" />
  </div>

  <Dialog
    v-model:visible="displayNewFileDialog"
    dismissableMask
    :modal="true"
    :draggable="false"
  >
    <template #header>
      <h3>Create new file</h3>
    </template>

    <div class="p-d-flex p-flex-column p-p-2">
      <label for="fileName" class="p-mb-2">File name:</label>
      <InputText
        id="fileName"
        type="text"
        v-model="newFileName"
        @keyup.enter="createNewFile"
        autofocus
      />
    </div>

    <template #footer>
      <Button @click="createNewFile" label="Create" icon="pi pi-check" />
    </template>
  </Dialog>
  <Dialog
    v-model:visible="displaySettingsDialog"
    dismissableMask
    :modal="true"
    :draggable="false"
  >
    <template #header>
      <h3>Editor settings</h3>
    </template>

    <div class="p-d-flex p-flex-column p-px-5">
      <div v-for="(value, option) in getConverterSettings" :key="option">
        <h4 class="p-mt-4 p-mb-1">{{ option }}</h4>
        <InputSwitch v-model="newConverterSettings[option]" />
      </div>
    </div>

    <template #footer>
      <Button @click="applySettings" label="Apply" icon="pi pi-check" />
    </template>
  </Dialog>
  <ConfirmDialog :draggable="false" />
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import Menubar from 'primevue/menubar';
import ConfirmDialog from 'primevue/confirmdialog';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';
import {
  DOCS, MARKDOWN, READER, HTML, DEFAULT,
} from './editorModes.js';

export default {
  name: 'VSidebar',
  components: {
    Menubar,
    ConfirmDialog,
    InputText,
    Dialog,
    Button,
    InputSwitch,
  },
  data() {
    return {
      newFileName: '',
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
              label: 'Left',
              icon: 'pi pi-fw pi-align-left',
            },
            {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right',
            },
            {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center',
            },
            {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify',
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
            this.newConverterSettings = this.getConverterSettings;
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
    ...mapMutations(['DELETE_FILE', 'CREATE_NEW_FILE', 'CHANGE_EDITOR_MODE', 'UPDATE_CONVERTER_SETTINGS']),
    createNewFile() {
      if (this.newFileName) {
        const name = this.newFileName;
        this.CREATE_NEW_FILE({ name });
        this.displayNewFileDialog = false;
        this.$router.push(`/files/${name}`);
      }
    },
    applySettings() {
      this.UPDATE_CONVERTER_SETTINGS(this.newConverterSettings);
      this.displaySettingsDialog = false;
    },
  },
  computed: {
    ...mapGetters(['getConverterSettings']),
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
