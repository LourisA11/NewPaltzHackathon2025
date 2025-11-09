const pool = require('../config/db.js');

// Get all business profiles
async function getAllBusinessProfiles() {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(`SELECT * FROM business_profiles`);
    return rows;
  } finally {
    conn.release();
  }
}

// Get business profile by user_id
async function getBusinessProfileByUserId(user_id) {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT * FROM business_profiles WHERE user_id = ?`,
      [user_id]
    );
    return rows[0];
  } finally {
    conn.release();
  }
}

// Add a business profile
async function addBusinessProfile(user_id, user_name, bio = '') {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO business_profiles (user_id, user_name, bio)
       VALUES (?, ?, ?)`,
      [user_id, user_name, bio]
    );
    return result.insertId;
  } finally {
    conn.release();
  }
}

module.exports = {
  getAllBusinessProfiles,
  getBusinessProfileByUserId,
  addBusinessProfile
};
