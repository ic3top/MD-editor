<template>
  <v-editor />
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
<!--  <router-view/>-->
</template>

<script>
import VEditor from './components/VEditor.vue';

export default {
  name: 'App',
  components: {
    VEditor,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/*body {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*}*/
</style>
