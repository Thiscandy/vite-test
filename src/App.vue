<template>
  <router-link to="/">Go to index</router-link>

  <router-link to="/ad">Go to ad</router-link>
  <router-link to="/home">Go to home</router-link>
  <router-view></router-view>
  <!-- <HelloWorld msg="hello" /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(0, 89, 253);
  display: block;
}
</style>
