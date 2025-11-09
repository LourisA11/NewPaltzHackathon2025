const express = require('express');
const personalProfiles = require('../models/personalModels.js');

const router = express.Router();

// Get all personal profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await personalProfiles.getAllPersonalProfiles();
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Add a personal profile
router.post('/', async (req, res) => {
  const { user_id, user_name, dining_status } = req.body;
  try {
    const id = await personalProfiles.addPersonalProfile(user_id, user_name, dining_status);
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
