const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { username, password, major, studentId } = req.body;
  if (!username || !password || !major || !studentId) {
      return res.status(400).json({ message: 'Please fill in all fields.' });
  }
  try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(400).json({ message: 'Username already exists.' });
      }

      const newUser = new User({
          username,
          password,
          major,
          studentid: studentId
      });

      await newUser.save();
      res.status(201).json({ message: 'User created' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ username });
      if (!user) {
          console.log('User not found:', username);
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      console.log('Plain text password:', password);
      console.log('Stored hashed password:', user.password);

      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Password comparison result:', isPasswordValid);
      if (!isPasswordValid) {
          console.log('Password invalid for user:', username);
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

router.get('/user', async (req, res) => {
  try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({
          username: user.username,
          studentid: user.studentid,
          major: user.major
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

module.exports = router;