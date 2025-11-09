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


router.patch('/:id/status', async (req, res) => {
  const { id } = req.params; // personal_profiles id
  const { dining_status } = req.body; // new status


  try {
    const updated = await personalProfiles.updateDiningStatus(id, dining_status);
    if (!updated) return res.status(404).json({ error: 'Profile not found' });
    res.json({ message: 'Dining status updated', id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
