const pool = require('../config/db.js');

// Get all posts
async function getAllPosts() {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT user_name, Content AS message, location, user_name, created_at 
       FROM post 
       ORDER BY created_at DESC`
    );
    return rows;
  } finally {
    conn.release();
  }
}

async function getPostsByUser(user_id) {
  let sql = `SELECT * FROM Post WHERE UserID = ${user_id} ORDER BY created_at DESC`;
  return await con.query(sql)
}
// Add a new post
async function addPost(user_id, user_name, Content, location) {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO post (user_id, user_name, Content, location)
       VALUES (?, ?, ?, ?)`,
      [user_id, user_name, Content, location]
    );
    return result.insertId;
  } finally {
    conn.release();
  }
}

module.exports = {
  getAllPosts,
  addPost
};
