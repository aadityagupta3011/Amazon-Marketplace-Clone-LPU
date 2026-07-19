const Student = require('../models/Student');

// @desc    Get all students
// @route   GET /api/students
const getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
};

// @desc    Create a student
// @route   POST /api/students
const createStudent = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.major) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const student = await Student.create(req.body);
  res.status(201).json(student);
};

module.exports = {
  getStudents,
  createStudent,
};