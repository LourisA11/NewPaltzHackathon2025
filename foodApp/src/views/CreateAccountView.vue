<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Initialize the router instance
// Reactive state (moved from original data() method)
const accountOptions = [
    { value: 'individual', text: 'Individual' },
    { value: 'club', text: 'Club' },
    { value: 'business', text: 'Business' }
]
//reactive state
const accountType = ref('select');
const username = ref('');
const email = ref('');
const password = ref('');

const handleSignup = (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Add your signup logic here (e.g., API call)
  console.log('Account Created:', { 
    accountType: accountType.value,
    username: username.value,
    email: email.value,
    password: password.value
  });
};
  // Programmatic navigation to the HomeMain route (which you'd call 'Dashboard' or similar)
 // router.push('/dashboard'); 
</script>
<template>
    <main class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Create your account</h1>
      
      <form class="space-y-4" @submit="handleSignup"> 
        
        <div>
          <label for="account-type" class="block text-left text-sm font-medium text-gray-700 mb-1">
            Account Type
          </label>
          <select
            id="account-type"
            v-model="accountType" 
            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white pr-8"
          >
            <option value="individual">Individual</option>
            <option value="club">Club</option>
            <option value="business">Business</option>
          </select>
        </div>
        
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          required
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="email"
          v-model="email"
          placeholder="Email Address"
          required
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Create Account
        </button>
        <RouterLink to="/dashboard" class="block w-full py-3 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition duration-200">
          Dashboard
      </RouterLink>
        
        <RouterLink to="/" class="mt-4 w-full text-sm text-gray-500 hover:text-blue-600 transition block pt-2">
          &larr; Go back to Home
        </RouterLink>
      </form>
    </div>
  </main>
</template>
    