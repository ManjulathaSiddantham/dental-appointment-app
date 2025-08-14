const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  specialization: { type: String, required: true },
  bio: { type: String },
  availability: { type: Array, default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
