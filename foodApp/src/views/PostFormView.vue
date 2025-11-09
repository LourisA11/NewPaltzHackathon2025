//PseudoCode:Food share post for logic
//Variables: 
location 
message
isSubmitting (boolean)
<template>
 <div>
<form id="postForm">
    <label for="title">Location:</label><br>
    <input type="text" id="title" name="title" placeholder="Address ex: SH 181"><br>
    <label for="content">Message:</label><br>
    <textarea id="content" name="content" placeholder = "Describe the food available."></textarea><br>
    <input type="submit" value="Post">
</form>


</div>

    <div id="post-form"></div>
    <div id="editModal" style="display:none; border: 1px solid #ccc; padding: 16px; margin-top: 20px;">
        <h3>Edit Post</h3>
        <input type="text" id="editTitle" placeholder="Edit Title"><br><br>
        <textarea id="editContent" placeholder="Edit Content"></textarea><br><br>
        <button id="saveEdit">Save Changes</button>
        <button onclick="document.getElementById('editModal').style.display='none'">Cancel</button>
      </div>
</template>