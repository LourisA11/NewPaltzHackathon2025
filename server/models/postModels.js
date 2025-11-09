const pool = require('../config/db.js');

async function getAllPosts() {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT user_name, content, location, created_at
       FROM post
       ORDER BY created_at DESC`
    );
    return rows;
  } finally {
    conn.release();
  }
}

async function addPost(user_id, user_name, content, location) {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO post (user_id, user_name, content, location)
       VALUES (?, ?, ?, ?)`,
      [user_id, user_name, content, location]
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