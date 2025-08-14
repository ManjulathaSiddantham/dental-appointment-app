// backend/routes/doctors.js
const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const auth = require('../middleware/authMiddleware');

// get all doctors
router.get('/', async (req, res) => {
  const doctors = await Doctor.find().populate('user', 'name email');
  res.json(doctors);
});

// create doctor profile (doctor role required ideally)
router.post('/', auth, async (req, res) => {
  // For simplicity allow any authenticated user to create doctor profile
  const { specialization, bio, availability } = req.body;
  try {
    const existing = await Doctor.findOne({ user: req.user._id });
    if (existing) return res.status(400).json({ message: 'Profile exists' });
    const doc = new Doctor({ user: req.user._id, specialization, bio, availability });
    await doc.save();
    res.json(doc);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
