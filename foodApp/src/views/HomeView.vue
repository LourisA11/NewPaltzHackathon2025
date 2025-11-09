<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<div class="text-center bg-white p-8 rounded-2xl shadow-xl">
    <h1 class="text-6xl font-extrabold text-green-700 mb-4">
      New Paltz Pantry
    </h1>
    <p class="">
      Combating food waste and food insecurity in our community.
    </p>
    <div class="space-y-4">
      <RouterLink to="/create-account" class="block w-full py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 transition duration-200">
        Create Account
      </RouterLink>
      <RouterLink to="/login" class="block w-full py-3 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition duration-200">
        Log In
      </RouterLink>
      <RouterLink to="/about" class="block w-full py-3 bg-amber-500 text-white font-bold rounded-lg shadow-md hover:bg-amber-600 transition duration-200">
        About 
       </RouterLink>
    </div>
  </div>
</template>
