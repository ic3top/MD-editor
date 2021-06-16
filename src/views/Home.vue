<template>
  <div class="v-home">
    <Card class="p-shadow-6 p-pt-4">
      <template #header>
        <h1 class="p-text-center">All of your files</h1>
      </template>
      <template #content>
          <div v-for="name in getAllFileNames" :key="name" class="v-link-wrapper">
            <router-link
              :to="'/files/' + name"
            >
              {{ name }}
            </router-link>
            <div class="v-buttons">
              <Button icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text" />
              <Button
                icon="pi pi-times"
                @click="deleteFile($event, name)"
                class="p-button-rounded p-button-text"
              />
            </div>
          </div>
      </template>
      <template #footer>
        <div class="p-d-flex p-justify-end p-mt-4">
          <Button
            label="Create new file +"
            class="p-button-outlined"
            @click="displayDialog = true"
          />
        </div>
      </template>
    </Card>
    <ConfirmPopup></ConfirmPopup>
    <Dialog v-model:visible="displayDialog" dismissableMask :modal="true" :draggable="false">
      <template #header>
        <h3>Create new file</h3>
      </template>

      <div class="p-d-flex p-flex-column">
        <label for="fileName" class="p-mb-2">File name:</label>
        <InputText
          id="fileName"
          type="text"
          v-model="fileName"
          @keyup.enter="createNewFile"
          autofocus
        />
      </div>

      <template #footer>
        <Button @click="createNewFile" label="Create" icon="pi pi-check" autofocus />
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Card from 'primevue/card';
import ConfirmPopup from 'primevue/confirmpopup';
import InputText from 'primevue/inputtext';

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      displayDialog: false,
      fileName: null,
    };
  },
  components: {
    Card,
    Button,
    ConfirmPopup,
    Dialog,
    InputText,
  },
  computed: {
    ...mapGetters(['getAllFileNames']),
  },
  methods: {
    ...mapMutations(['DELETE_FILE', 'CREATE_NEW_FILE']),
    deleteFile(event, name) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.DELETE_FILE({ name });
        },
      });
    },
    createNewFile() {
      if (this.fileName) {
        this.CREATE_NEW_FILE({ name: this.fileName });
        this.$router.push(`/files/${this.fileName}`);
      }
    },
  },
};
</script>

<style scoped>
.v-home {
  background-color: var(--surface-100);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #dddddd;
}

.v-link-wrapper {
  margin: 10px 0;
  padding: 5px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  transition: all .2s ease;
}

.v-link-wrapper:hover {
  box-shadow: 5px 3px 4px #222222;
}
.v-link-wrapper:hover .v-buttons {
  visibility: visible;
}

.v-buttons {
  visibility: hidden;
}

.v-create {
  display: block;
  padding: 10px 0;
  text-align: center;
  font-size: 1.5rem;
  border: 2px dot-dash #dddddd;
  border-radius: 20px;
  background: inherit;
  outline: none;
}
</style>
