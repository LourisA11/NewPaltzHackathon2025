const express = require('express');
const clubProfiles = require('../models/clubModels.js');

const router = express.Router();

// GET all club profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await clubProfiles.getAllClubProfiles();
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// GET club profile by user_id
router.get('/:user_id', async (req, res) => {
  try {
    const profile = await clubProfiles.getClubProfileByUserId(req.params.user_id);
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// POST add a new club profile
router.post('/', async (req, res) => {
  const { user_id, user_name, bio } = req.body;
  try {
    const id = await clubProfiles.addClubProfile(user_id, user_name, bio);
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// PATCH update bio of a club profile
router.patch('/:user_id/bio', async (req, res) => {
  const { newBio } = req.body;
  try {
    const updatedRows = await clubProfiles.updateBio(req.params.user_id, newBio);
    if (updatedRows === 0) return res.status(404).json({ error: 'Profile not found' });
    res.json({ message: 'Bio updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
