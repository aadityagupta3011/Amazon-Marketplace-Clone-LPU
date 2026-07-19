const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Ajay Yadav'],
  },
  email: {
    type: String,
    required: [true, 'ajay@gmail.com'],
    unique: true,
  },
  major: {
    type: String,
    required: [true, 'Kkkk'],
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Student', studentSchema);