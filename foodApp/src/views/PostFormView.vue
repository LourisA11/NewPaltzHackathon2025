//PseudoCode:Food share post for logic
//Variables: 
location 
message
isSubmitting (boolean)
<template>

 <div>
<form id="postForm">
    <label for="title">Title:</label><br>
    <input type="text" id="title" name="title"><br>
    <label for="content">Content:</label><br>
    <textarea id="content" name="content"></textarea><br>
    <input type="submit" value="Post">
</form>


</div>

    <div id="posts"></div>
    <div id="editModal" style="display:none; border: 1px solid #ccc; padding: 16px; margin-top: 20px;">
        <h3>Edit Post</h3>
        <input type="text" id="editTitle" placeholder="Edit Title"><br><br>
        <textarea id="editContent" placeholder="Edit Content"></textarea><br><br>
        <button id="saveEdit">Save Changes</button>
        <button onclick="document.getElementById('editModal').style.display='none'">Cancel</button>
      </div>
</template>