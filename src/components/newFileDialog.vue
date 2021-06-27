<template>
  <Dialog
    @update:visible="$emit('update:visible', isVisible)"
    :visible="visible"
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
        :class="{'p-invalid': !isValid}"
        type="text"
        v-model.trim="newFileName"
        @keyup.enter="createNewFile"
        @input="setValid"
        aria-describedby="error-content"
        autofocus
      />
      <small v-show="errorContent" class="p-error" id="error-content">{{ errorContent }}</small>
    </div>

    <template #footer>
      <Button @click="createNewFile" label="Create" icon="pi pi-check" />
    </template>
  </Dialog>
</template>

<script>
import { mapGetters } from 'vuex';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'CreateNewFileDialog',
  props: {
    visible: {
      type: Boolean,
    },
  },
  emits: ['createNewFile', 'update:visible'],
  components: {
    Dialog,
    InputText,
    Button,
  },
  data() {
    return {
      newFileName: '',
      isValid: true,
      errorContent: null,
    };
  },
  methods: {
    createNewFile() {
      if (!this.newFileName) {
        this.isValid = false;
        this.errorContent = 'Invalid name given';
        return;
      }
      if (this.getAllFileNames.includes(this.newFileName)) {
        this.isValid = false;
        this.errorContent = `'${this.newFileName}' already exists...`;
        return;
      }

      this.$emit('createNewFile', this.newFileName);
    },
    setValid() {
      this.isValid = true;
      this.errorContent = null;
    },
  },
  computed: {
    ...mapGetters(['getAllFileNames']),
  },
};
</script>
