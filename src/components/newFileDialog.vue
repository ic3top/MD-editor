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
        type="text"
        v-model.trim="newFileName"
        @keyup.enter="createNewFile"
        autofocus
      />
    </div>

    <template #footer>
      <Button @click="createNewFile" label="Create" icon="pi pi-check" />
    </template>
  </Dialog>
</template>

<script>
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
    };
  },
  methods: {
    createNewFile() {
      if (this.newFileName) {
        this.$emit('createNewFile', this.newFileName);
      }
    },
  },
};
</script>
