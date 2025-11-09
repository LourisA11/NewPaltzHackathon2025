const pool = require('../config/db.js');
const bcrypt = require('bcrypt');

async function getAllUsers() {
  let conn;
  try {
    conn = await pool.getConnection();
    const [rows] = await conn.query("SELECT id, name, email, user_type, created_at FROM users");
    return rows;
  } finally {
    if (conn) conn.release();
  }
}

async function getUserById(id) {
  let conn;
  try {
    conn = await pool.getConnection();
    const [rows] = await conn.query("SELECT id, name, email, user_type, created_at FROM users WHERE id = ?", [id]);
    return rows[0];
  } finally {
    if (conn) conn.release();
  }
}

async function getByEmail(email) {
  let conn;
  try {
    conn = await pool.getConnection();
    const [rows] = await conn.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  } finally {
    if (conn) conn.release();
  }
}

async function addUser(name, email, password, user_type = 'personal') {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  let conn;
  try {
    conn = await pool.getConnection();
    const [result] = await conn.query(
      "INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, user_type]
    );
    return result.insertId;
  } finally {
    if (conn) conn.release();
  }
}

async function login(email, password) {
  const user = await getByEmail(email);
  if (!user) throw new Error('Invalid email or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid email or password');

  const { password: _, ...userData } = user;
  return userData;
}

async function isUserAvailable(name) {
  let conn;
  try {
    conn = await pool.getConnection();
    const [rows] = await conn.query("SELECT COUNT(*) as count FROM users WHERE name = ?", [name]);
    return Number(rows[0].count) === 0;
  } finally {
    if (conn) conn.release();
  }
}

async function isEmailAvailable(email) {
  let conn;
  try {
    conn = await pool.getConnection();
    const [rows] = await conn.query("SELECT COUNT(*) as count FROM users WHERE email = ?", [email]);
    return Number(rows[0].count) === 0;
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getByEmail,
  addUser,
  login,
  isUserAvailable,
  isEmailAvailable
};