const express = require('express');

const users = require('../models/usersModels.js');

const router = express.Router();



// GET /api/users
router.get('/', async (req, res) => {
  try {
    const all = await users.getAllUsers();
    res.json(all);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await users.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/users
router.post('/', async (req, res) => {
  const { name, email, password, user_type } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email and password are required' });
  }

  try {
    if (!(await users.isEmailAvailable(email))) {
      return res.status(409).json({ error: 'Email already in use' });
    }
    if (!(await users.isUserAvailable(name))) {
      return res.status(409).json({ error: 'Username already in use' });
    }

    const id = await users.addUser(name, email, password, user_type); // uses pool internally
    // Automatically insert into the correct profile table
    if (user_type === 'personal') {
      await personalProfiles.addPersonalProfile(id, name, 'low');
    } else if (user_type === 'club') {
      await clubProfiles.addClubProfile(id, name, '');
    } else if (user_type === 'business') {
      await businessProfiles.addBusinessProfile(id, name, '');
    }
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});



// POST /api/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.login(email, password);
    res.json({ message: 'Login successful', user });
  } catch (err) {
     console.error('Error in /users POST:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users/check-email?email=...
router.get('/check-email', async (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ error: 'email query required' });
  try {
    const available = await users.isEmailAvailable(email);
    res.json({ available });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/users/check-username?name=...
router.get('/check-username', async (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: 'name query required' });
  try {
    const available = await users.isUserAvailable(name);
    res.json({ available });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;