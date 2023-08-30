const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: 'Register the user' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'User Logged in' });
});

router.get('/current', (req, res) => {
  res.json({ message: 'User Information' });
});

module.exports = router;
