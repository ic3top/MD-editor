<template>
  <div class="v-link-wrapper">
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
        :class="{'p-invalid': !isValid}"
        type="text"
        ref="editNameInput"
        @keydown.esc="refreshEditing"
        @keydown.enter="saveEditedName"
        @input="isValid = true"
        v-model.trim="newFileName"
        autocomplete="off"
      />
      <Button
        icon="pi pi-check"
        @click="saveEditedName"
        class="p-button-rounded p-button-text"
      />
      <Button
        icon="pi pi-times"
        @click="refreshEditing"
        class="p-button-rounded p-button-text"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { nextTick } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
  name: 'FileNameLine',
  components: {
    Button,
    InputText,
  },
  emits: ['deleteFile', 'saveEditedName'],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      newFileName: '',
      savedFileName: '',
      isValid: true,
    };
  },
  computed: {
    ...mapGetters(['getAllFileNames']),
  },
  methods: {
    deleteFile(event, name) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$emit('deleteFile', name);
        },
      });
    },
    async editNameOpen(name) {
      this.savedFileName = name;
      this.newFileName = name;
      await nextTick();
      this.$refs.editNameInput.$el.focus();
    },
    refreshEditing() {
      this.newFileName = '';
      this.savedFileName = '';
      this.isValid = true;
    },
    saveEditedName() {
      if (this.newFileName === this.savedFileName) {
        this.refreshEditing();
        return;
      }
      if (!this.newFileName || this.getAllFileNames.includes(this.newFileName)) {
        this.isValid = false;
        return;
      }
      this.$emit('saveEditedName', { oldName: this.savedFileName, newName: this.newFileName });
      this.refreshEditing();
    },
  },
};
</script>

<style scoped>
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
  box-shadow: 2px 3px 7px #222222;
}

.v-link-wrapper:hover .v-buttons {
  visibility: visible;
}

.v-buttons {
  visibility: hidden;
}
</style>
