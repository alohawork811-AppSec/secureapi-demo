const { verifyToken } = require('./auth');
const router = require('express').Router();

// In-memory store for demo
const profiles = new Map();

function getProfile(req, res) {
  const profile = profiles.get(req.user.email);
  if (!profile) {
    return res.status(404).json({ error: 'Profile not found' });
  }
  res.json(profile);
}

function updateProfile(req, res) {
  const { name, bio, avatar } = req.body;
  const existing = profiles.get(req.user.email) || {};
  
  const updated = {
    ...existing,
    email: req.user.email,
    name: name || existing.name,
    bio: bio || existing.bio,
    avatar: avatar || existing.avatar,
    updatedAt: new Date().toISOString()
  };

  profiles.set(req.user.email, updated);
  res.json(updated);
}

router.get('/me', verifyToken, getProfile);
router.put('/me', verifyToken, updateProfile);

module.exports = router;
