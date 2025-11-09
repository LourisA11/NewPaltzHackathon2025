<template>
 <main class="post-form-view flex flex-col items-center justify-start min-h-screen bg-gray-100 p-8">
    <div class="text-center bg-white p-8 rounded-2xl shadow-xl">
        <h1 class="text-6xl font-extrabold text-green-700 mb-4">
        New Paltz Pantry
        </h1>
        <p class="">
            Free Food Feed
        </p>
        <div class="">
            <RouterLink to="/post-form" class="block w-full py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 transition duration-200">
             Make a Post
            </RouterLink>
        </div>
    </div>


    <section class="w-full max-w-2xl mt-6">
            <h3 class="text-lg font-semibold mb-3">Recent Posts</h3>
            <div v-if="loadingPosts" class="text-gray-500">Loading posts…</div>
            <ul v-else class="space-y-4">
                <li v-for="(post, idx) in posts" :key="idx" class="bg-white p-4 rounded shadow">
                    <div class="text-sm text-gray-600">{{ post.user_name }} — <span class="font-medium">{{ post.location || 'Unknown location' }}</span></div>
                    <p class="mt-2">{{ post.message || post.Content }}</p>
                    <div class="text-xs text-gray-400 mt-2">{{ formatDate(post.created_at) }}</div>
                </li>
            </ul>
            <div v-if="posts.length === 0 && !loadingPosts" class="text-gray-500">No posts yet.</div>
        </section>
        </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'  // <-- Import these

const posts = ref([])
const error = ref('')

const fetchPosts = async () => {
  try {
    const response = await fetch('/posts')
    if (!response.ok) throw new Error('Failed to fetch posts')
    posts.value = await response.json()
    error.value = ''
  } catch (err) {
    error.value = err.message
  }
}

function formatDate(value) {
    if (!value) return ''
    const d = new Date(value)
    return d.toLocaleString()
}
onMounted(() => {
  fetchPosts()
})
</script>