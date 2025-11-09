<template>
  <div class="bg-white p-8 rounded-2xl shadow-xl">
    <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">Create Your Account</h2>
    
    <div class="space-y-5">
      <button 
          @click="handleSignup"
          class="w-full p-3 mt-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Done (Go to Main Page)
      </button>

      <button @click="router.push('/')" class="mt-4 w-full text-sm text-gray-500 hover:text-indigo-600 transition">
        &larr; Back to Home
      </button>
    </div>
  </div>
</template>

//<script setup>
//import { ref } from 'vue';
//import { useRouter } from 'vue-router'; // Import useRouter

 // Initialize the router instance


//};
//</script>