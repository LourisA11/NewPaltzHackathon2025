<script setup>
</script>

<template>
  <main class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Login to your account</h1>
      <form class="space-y-4">
        <input
          type="email"
          placeholder="Email"
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
         <RouterLink to="/" class="mt-4 w-full text-sm text-gray-500 hover:text-indigo-600 transition">
          &larr; Home View
        </RouterLink>
      
      </form>
    </div>
  </main>
</template>

