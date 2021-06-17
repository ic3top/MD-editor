<template>
  <v-menubar />
  <v-editor />
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
