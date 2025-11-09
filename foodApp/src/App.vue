<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/icons/NavBar.vue'
</script>
<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>
<style scoped>

</style>
