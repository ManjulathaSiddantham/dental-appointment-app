const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// @desc Create appointment
router.post("/", async (req, res) => {
  try {
    const { name, contactNumber, email, appointmentDate, message } = req.body;

    if (!name || !contactNumber || !email || !appointmentDate) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const appointment = new Appointment({
      name,
      contactNumber,
      email,
      appointmentDate,
      message
    });

    await appointment.save();
    res.status(201).json({ message: "Appointment created successfully", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc Get all appointments (for Admin UI)
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
