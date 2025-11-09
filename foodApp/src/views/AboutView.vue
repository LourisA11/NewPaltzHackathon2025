<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
   <RouterLink to="/" class="mt-4 w-full text-sm text-gray-500 hover:text-indigo-600 transition">
      Home View
      </RouterLink>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
