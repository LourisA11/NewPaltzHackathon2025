<template>
  <div class="post-form">
    <form @submit.prevent="createPost">
      <label for="content">Content:</label><br>
      <textarea v-model="content" id="content" name="content"></textarea><br>

      <label for="location">Location:</label><br>
      <input v-model="location" id="location" name="location" /><br>

      <button type="submit">Post</button>
    </form>

    <p v-if="message" style="color: green;">{{ message }}</p>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data() {
    return {
      content: '',
      location: '',
      message: '',
      error: ''
    };
  },
  methods: {
    async createPost() {
      try {
        const response = await fetch('http://localhost:5000/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: 1, // Replace with actual logged-in user
            user_name: 'Alice',
            content: this.content,
            location: this.location
          })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to create post');

        this.message = '✅ Post created successfully!';
        this.error = '';
        this.content = '';
        this.location = '';
      } catch (err) {
        this.error = `❌ ${err.message}`;
        this.message = '';
      }
    }
  }
};
</script>

<style scoped>
.post-form {
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
textarea, input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.5rem;
}
button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
}
</style>
