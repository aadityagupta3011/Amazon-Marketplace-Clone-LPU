const express = require('express');
const router = express.Router();
const { getStudents, createStudent } = require('../controllers/studentController');

// Route for getting all students and creating a new one
router.route('/').get(getStudents).post(createStudent);

// You can add more specific routes like this:
// router.route('/:id').get(getStudentById).put(updateStudent).delete(deleteStudent);

module.exports = router;