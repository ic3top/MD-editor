<template>
  <div class="v-wrapper">
    <Card class="p-mt-5 p-shadow-4 p-p-4" style="z-index: 1">
      <template #header>
        <h1>Oops...</h1>
      </template>
      <template #content>
        <h3>The {{ resource }} you're looking for is not here.</h3>
        <div class="p-text-center p-mt-5">
          <router-link :to="{ name: 'Home' }">
            Back to Home Page <span class="pi pi-home"></span>
          </router-link>
        </div>
      </template>
    </Card>
    <div class="v-img-wrapper" style="z-index: 1">
      <img style="max-height: 100%;" src="../assets/UFO.png" alt="UFO">
    </div>
  </div>
  <animation-circles />
</template>

<script>
import Card from 'primevue/card';
import AnimationCircles from '../components/AnimationCircles';

export default {
  name: 'NotFound',
  components: {
    Card,
    AnimationCircles,
  },
  props: {
    resource: {
      type: String,
      default: 'page',
    },
  },
};
</script>

<style scoped>
.v-wrapper {
  min-height: 100vh;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  color: var(--text-color);
  background-color: var(--surface-100);
}

.v-img-wrapper {
  position: absolute;
  right: 25px;
  top: 15px;
  height: 100px;
  transform: rotateZ(45deg);
}
</style>
