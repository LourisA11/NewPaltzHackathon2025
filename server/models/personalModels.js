const pool = require('../config/db.js');
const bcrypt = require('bcrypt');

// Get all personal profiles
async function getAllPersonalProfiles() {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT * FROM personal_profiles`
    );
    return rows;
  } finally {
    conn.release();
  }
}

// Get personal profile by user_id
async function getPersonalProfileByUserId(user_id) {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT * FROM personal_profiles WHERE user_id = ?`,
      [user_id]
    );
    return rows[0];
  } finally {
    conn.release();
  }
}

// Add a personal profile
async function addPersonalProfile(user_id, user_name, dining_status = 'low') {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO personal_profiles (user_id, user_name, dining_status)
       VALUES (?, ?, ?)`,
      [user_id, user_name, dining_status]
    );
    return result.insertId;
  } finally {
    conn.release();
  }
}

module.exports = {
  getAllPersonalProfiles,
  getPersonalProfileByUserId,
  addPersonalProfile
};
