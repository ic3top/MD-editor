<template>
  <v-menubar />
  <v-editor />
</template>

<script>
import { mapGetters } from 'vuex';
import VMenubar from '../components/VMenubar.vue';
import VEditor from '../components/VEditor.vue';

export default {
  name: 'MainEditor',
  components: {
    VMenubar,
    VEditor,
  },
  beforeRouteUpdate(to, from, next) {
    if (!this.getContentByFileName(to.params.name)) {
      next('/');
      return;
    }
    next();
  },
  computed: {
    ...mapGetters(['getContentByFileName']),
  },
};
</script>

<style scoped>

</style>
