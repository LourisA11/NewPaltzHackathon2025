<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
<template>
  <div id="app" class="w-full max-w-lg p-6 mx-auto">
    <RouterView v-slot="{ Component }">
      <transition name="v" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<!-- /
<style>
/* Custom Transition for smooth view switching (Moved from original <style> tag) */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.4s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

</style> -->
