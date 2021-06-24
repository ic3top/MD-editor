<template>
  <div class="v-home">
    <Card class="p-shadow-6 p-p-4 v-pos-relative">
      <template #header>
        <h1 class="p-text-center" style="border-bottom: 1px solid var(--primary-color)">
          In-browser Markdown editor
        </h1>
      </template>
      <template #content>
        <p>
          Unrivalled writing experience
        </p>
        <a
          href="https://github.com/ic3top/MD-editor/"
          target="_blank"
          class="v-github-link p-button-rounded p-button-text p-link">
          <span class="pi pi-github"></span>
        </a>
      </template>
    </Card>
    <template v-if="getAllFileNames.length > 0">
      <Card class="p-shadow-6 p-pt-4 p-mt-2">
        <template #header>
          <h2 class="p-pl-3">Your saved files:</h2>
        </template>
        <template #content>
          <div
            v-for="name in getAllFileNames"
            :key="name"
            class="v-link-wrapper"
          >
            <template v-if="savedFileName !== name">
              <router-link
                style="text-decoration-line: none; font-size: 1.5rem;"
                :to="'/files/' + name"
                class="p-d-flex p-align-center"
              >
                {{ name }}
              </router-link>
              <div class="v-buttons">
                <Button
                  @click="editNameOpen(name)"
                  icon="pi pi-pencil"
                  class="p-button-rounded p-button-text"
                />
                <Button
                  icon="pi pi-times"
                  @click="deleteFile($event, name)"
                  class="p-button-rounded p-button-text"
                />
              </div>
            </template>
            <template v-else>
              <InputText
                id="editName"
                type="text"
                ref="editNameInput"
                @keydown.esc="cancelEditing"
                @keydown.enter="saveEditing"
                v-model="newFileName"
              />
              <Button
                icon="pi pi-check"
                @click="saveEditing"
                class="p-button-rounded p-button-text"
              />
              <Button
                icon="pi pi-times"
                @click="cancelEditing"
                class="p-button-rounded p-button-text"
              />
            </template>
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
    </template>
    <template v-else>
      <Button
        label="Create new file +"
        class="p-button-outlined"
        @click="displayDialog = true"
      />
    </template>

    <ConfirmPopup></ConfirmPopup>
    <new-file-dialog
      v-model:visible="displayDialog"
      @createNewFile="createNewFile"
    />
  </div>
</template>

<script>
import Button from 'primevue/button';
import Card from 'primevue/card';
import ConfirmPopup from 'primevue/confirmpopup';
import InputText from 'primevue/inputtext';
import {
  DELETE_FILE,
  CREATE_NEW_FILE,
  CHANGE_FILE_NAME,
} from '@/store/mutations-types';

import { nextTick } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import newFileDialog from '../components/newFileDialog.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Button,
    ConfirmPopup,
    InputText,
    newFileDialog,
  },
  data() {
    return {
      displayDialog: false,
      newFileName: '',
      savedFileName: '',
    };
  },
  computed: {
    ...mapGetters(['getAllFileNames']),
  },
  methods: {
    ...mapMutations([DELETE_FILE, CREATE_NEW_FILE, CHANGE_FILE_NAME]),
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
    createNewFile(newFileName) {
      this.CREATE_NEW_FILE({ name: newFileName });
      this.$router.push(`/files/${newFileName}`);
    },
    async editNameOpen(name) {
      this.savedFileName = name;
      this.newFileName = name;
      await nextTick();
      this.$refs.editNameInput.$el.focus();
    },
    cancelEditing() {
      this.newFileName = '';
      this.savedFileName = '';
    },
    saveEditing() {
      this.CHANGE_FILE_NAME({ oldName: this.savedFileName, newName: this.newFileName });
      this.savedFileName = '';
      this.newFileName = '';
    },
  },
};
</script>

<style scoped>
.v-home {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: var(--surface-100);
  min-height: 100vh;
  color: #dddddd;
}

.v-pos-relative {
  position: relative;
}

.v-github-link {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: var(--primary-color)
}

.v-link-wrapper {
  margin: 10px 0;
  padding: 5px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
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
