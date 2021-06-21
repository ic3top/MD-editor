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
      <Panel
        v-for="(value, option) in editorSettings"
        :key="option"
        :toggleable="true"
        :collapsed="true"
        class="p-mt-2"
      >
        <template #header>
          <div>
            <h4 class="p-mt-4 p-mb-1">{{ option }}</h4>
            <InputSwitch v-model="newEditorSettings[option]" />
          </div>
        </template>
        <div v-html="descriptions[option]"></div>
      </Panel>
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
import Panel from 'primevue/panel';
import descriptions from '../views/editor/editorSettingsDesctiptions';

export default {
  name: 'converterSettingsDialog',
  props: {
    visible: {
      type: Boolean,
    },
    editorSettings: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:visible', 'applySettings'],
  components: {
    Dialog,
    InputSwitch,
    Button,
    Panel,
  },
  data() {
    return {
      newEditorSettings: JSON.parse(JSON.stringify(this.editorSettings)),
      descriptions,
    };
  },
  methods: {
    applySettings() {
      this.$emit('applySettings', this.newEditorSettings);
    },
  },
};
</script>

<style scoped>
.p-panel {
  width: 350px;
}

.p-panel-content {
  max-width: 100%;
}

@media screen and (max-width: 500px) {
  .p-panel {
    width: 200px;
  }
}
</style>
