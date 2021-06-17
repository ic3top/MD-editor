<template>
  <div class="v-wrapper">
    <Menubar :model="items" />
  </div>

  <Dialog
    v-model:visible="displayDialog"
    dismissableMask
    :modal="true"
    :draggable="false"
  >
    <template #header>
      <h3>Create new file</h3>
    </template>

    <div class="p-d-flex p-flex-column">
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
      <Button @click="createNewFile" label="Create" icon="pi pi-check" autofocus />
    </template>
  </Dialog>
  <ConfirmDialog :draggable="false" />
</template>

<script>
import { mapMutations } from 'vuex';
import Menubar from 'primevue/menubar';
import ConfirmDialog from 'primevue/confirmdialog';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'VSidebar',
  components: {
    Menubar,
    ConfirmDialog,
    InputText,
    Dialog,
    Button,
  },
  data() {
    return {
      newFileName: '',
      displayDialog: false,
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
                this.displayDialog = true;
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
          label: 'Events',
          icon: 'pi pi-fw pi-calendar',
          items: [
            {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                {
                  label: 'Save',
                  icon: 'pi pi-fw pi-calendar-plus',
                },
                {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-calendar-minus',
                },

              ],
            },
            {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [
                {
                  label: 'Remove',
                  icon: 'pi pi-fw pi-calendar-minus',
                },
              ],
            },
          ],
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
    ...mapMutations(['DELETE_FILE', 'CREATE_NEW_FILE']),
    createNewFile() {
      if (this.newFileName) {
        const name = this.newFileName;
        this.CREATE_NEW_FILE({ name });
        this.displayDialog = false;
        this.$router.push(`/files/${name}`);
      }
    },
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
