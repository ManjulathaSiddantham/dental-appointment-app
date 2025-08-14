const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    maxlength: 30,
    match: [/^[a-zA-Z0-9\s]+$/, 'No special characters allowed']
  }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
