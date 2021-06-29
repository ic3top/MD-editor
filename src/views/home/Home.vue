<template>
  <div class="v-home">
    <Card class="p-shadow-6 p-p-4 p-mt-4 v-pos-relative" style="z-index: 1">
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
    <Card
      v-if="getAllFileNames.length > 0"
      class="p-shadow-6 p-pt-4 p-mt-4"
      style="z-index: 1"
    >
      <template #header>
        <h2 class="p-pl-3">Your saved files:</h2>
      </template>
      <template #content>
        <file-name-line
          v-for="name in getAllFileNames"
          :key="name"
          :name="name"
          @deleteFile="deleteFile"
          @saveEditedName="saveEditedName"
        />
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
    <Button
      v-else
      label="Create new file +"
      class="p-button-outlined"
      @click="displayDialog = true"
      style="z-index: 1"
    />

    <ConfirmPopup></ConfirmPopup>
    <new-file-dialog
      v-model:visible="displayDialog"
      @createNewFile="createNewFile"
    />
  </div>
  <animation-circles />
</template>

<script>
import Button from 'primevue/button';
import Card from 'primevue/card';
import ConfirmPopup from 'primevue/confirmpopup';
import {
  DELETE_FILE,
  CREATE_NEW_FILE,
  CHANGE_FILE_NAME,
} from '@/store/mutations-types';

import { mapGetters, mapMutations } from 'vuex';
import FileNameLine from './FileNameLine.vue';
import AnimationCircles from '../../components/AnimationCircles';
import newFileDialog from '../../components/newFileDialog.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Button,
    ConfirmPopup,
    newFileDialog,
    AnimationCircles,
    FileNameLine,
  },
  data() {
    return {
      displayDialog: false,
      newFileName: '',
    };
  },
  computed: {
    ...mapGetters(['getAllFileNames']),
  },
  methods: {
    ...mapMutations([DELETE_FILE, CREATE_NEW_FILE, CHANGE_FILE_NAME]),
    deleteFile(name) {
      this.DELETE_FILE({ name });
    },
    createNewFile(newFileName) {
      this.CREATE_NEW_FILE({ name: newFileName });
      this.$router.push(`/files/${newFileName}`);
    },
    saveEditedName(namesObj) {
      this.CHANGE_FILE_NAME(namesObj);
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
