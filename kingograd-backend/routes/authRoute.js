const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { checkMinBGrades } = require('../BGradeChecker');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'User created' });  // Send a JSON response
    } catch (error) {
        res.status(500).json({ message: error.message });  // Send JSON error message
    }
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// defining new route to check stud 10K req eligibility
router.get('/student/:id/10K_req', async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await User.findById(studentId);

    if(!student) {
      return res.status(404).json({ message: 'Student not found'});

    }

    const isEligible = checkMinBGrades(student.grades);
    return res.json({isEligible});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error'});
  }
});

module.exports = router;
