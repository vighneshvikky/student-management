const express = require('express');
const router = express.Router();

module.exports = (studentController) => {
    router.get('/', studentController.getAllStudents.bind(studentController));
    router.get('/:studentId', studentController.getStudentById.bind(studentController));
    router.post('/', studentController.createStudent.bind(studentController));
    router.put('/:studentId', studentController.updateStudent.bind(studentController));
    router.delete('/:studentId', studentController.deleteStudent.bind(studentController));
    return router;
};
