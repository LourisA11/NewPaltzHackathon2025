const pool = require('../config/db.js');

// Get all club profiles
async function getAllClubProfiles() {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(`SELECT * FROM club_profiles`);
    return rows;
  } finally {
    conn.release();
  }
}

// Get club profile by user_id
async function getClubProfileByUserId(user_id) {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT * FROM club_profiles WHERE user_id = ?`,
      [user_id]
    );
    return rows[0];
  } finally {
    conn.release();
  }
}

// Add a club profile
async function addClubProfile(user_id, user_name, bio = '') {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO club_profiles (user_id, user_name, bio)
       VALUES (?, ?, ?)`,
      [user_id, user_name, bio]
    );
    return result.insertId;
  } finally {
    conn.release();
  }
}

// Update bio for a club profile
async function updateBio(user_id, newBio) {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `UPDATE club_profiles SET bio = ? WHERE user_id = ?`,
      [newBio, user_id]
    );
    return result.affectedRows;
  } finally {
    conn.release();
  }
}

module.exports = {
  getAllClubProfiles,
  getClubProfileByUserId,
  addClubProfile,
  updateBio
};
