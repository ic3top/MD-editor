<template>
  <div class="v-maineditor">
    <v-menubar />
    <v-editor />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VMenubar from './VMenubar.vue';
import VEditor from './VEditor.vue';

export default {
  name: 'MainEditor',
  components: {
    VMenubar,
    VEditor,
  },
  computed: {
    ...mapGetters(['getContentByFileName']),
  },
};
</script>
<style scoped>
.v-maineditor {
  height: calc(100vh - 76px);
}

@media (max-width: 960px) {
  .v-maineditor {
    height: calc(100vh - 68px);
  }
}
</style>
