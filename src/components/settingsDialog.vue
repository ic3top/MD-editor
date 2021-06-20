<template>
  <Dialog
    @update:visible="$emit('update:visible', isVisible)"
    :visible="visible"
    dismissableMask
    :modal="true"
    :draggable="false"
    @hide="applySettings"
  >
    <template #header>
      <h3>Editor settings</h3>
    </template>

    <div class="p-d-flex p-flex-column p-px-5">
      <div v-for="(value, option) in converterSettings" :key="option">
        <h4 class="p-mt-4 p-mb-1">{{ option }}</h4>
        <InputSwitch v-model="newConverterSettings[option]" />
      </div>
    </div>

    <template #footer>
      <Button @click="applySettings" label="Apply" icon="pi pi-check" />
    </template>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';

export default {
  name: 'converterSettingsDialog',
  props: {
    visible: {
      type: Boolean,
    },
    converterSettings: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:visible', 'applySettings'],
  components: {
    Dialog,
    InputSwitch,
    Button,
  },
  data() {
    return {
      newConverterSettings: JSON.parse(JSON.stringify(this.converterSettings)),
    };
  },
  methods: {
    applySettings() {
      this.$emit('applySettings', this.newConverterSettings);
    },
  },
};
</script>
