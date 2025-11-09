
<template>
    <main class="post-form-view flex flex-col items-center justify-start min-h-screen bg-gray-100 p-8">
        <section class="w-full max-w-2xl bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-bold mb-4">Create a Post</h2>

            <form @submit.prevent="createPost" class="space-y-3">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Your name</label>
                    <input v-model="userName" type="text" required class="w-full p-2 border rounded" placeholder="Your name" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Location</label>
                    <input v-model="location" type="text" required class="w-full p-2 border rounded" placeholder="Address (e.g. SH 181)" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Message</label>
                    <textarea v-model="content" required class="w-full p-2 border rounded" rows="4" placeholder="Describe the food available."></textarea>
                </div>

                <div class="flex items-center gap-2">
                    <button type="submit" :disabled="loading" class="bg-blue-600 text-white px-4 py-2 rounded">
                        {{ loading ? 'Posting...' : 'Post' }}
                    </button>
                    <button type="button" @click="clearForm" class="text-sm text-gray-600">Clear</button>
                </div>
            </form>
        </section>

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
import { ref, onMounted } from 'vue'

const userName = ref('')
const location = ref('')
const content = ref('')
const loading = ref(false)

const posts = ref([])
const loadingPosts = ref(false)

function clearForm() {
    userName.value = ''
    location.value = ''
    content.value = ''
}

function formatDate(value) {
    if (!value) return ''
    const d = new Date(value)
    return d.toLocaleString()
}

async function fetchPosts() {
    loadingPosts.value = true
    try {
        const res = await fetch('/posts')
        if (!res.ok) throw new Error('Failed to fetch posts')
        const data = await res.json()
        posts.value = data
    } catch (e) {
        console.error(e)
    } finally {
        loadingPosts.value = false
    }
}

async function createPost() {
    if (!userName.value || !content.value) return
    loading.value = true
    try {
        const body = {
            user_id: 1, // placeholder: replace with real user id
            user_name: userName.value,
            content: content.value,
            location: location.value,
        }

        const res = await fetch('/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

        if (!res.ok) {
            const err = await res.json().catch(() => ({}))
            throw new Error(err.error || 'Failed to create post')
        }

        // Refresh posts and clear
        await fetchPosts()
        clearForm()
    } catch (e) {
        console.error(e)
        alert(e.message)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchPosts()
})
</script>



