<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="flex justify-around p-4 bg-white shadow-md rounded-xl mb-6">
    <ul>
       <RouterLink to="/" class= "text-indigo-600 hover:text-indigo-800 font-semibold transition">Home</RouterLink>
       <RouterLink to="/about" class="text-indigo-600 hover:text-indigo-800 font-semibold transition">
      About
    </RouterLink>
    <RouterLink to="/login" class="text-green-600 hover:text-green-800 font-bold transition">
      Login
    </RouterLink>
    <RouterLink to="/create-account" class="text-red-600 hover:text-red-800 font-bold transition">
      Sign Up
    </RouterLink> 
              
    </ul>
  </nav>
</template>
