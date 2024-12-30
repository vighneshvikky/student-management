const studentService = require('../services/studentService');

class StudentController {
  async getAll(req, res) {
    try {
      const students = await studentService.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const student = await studentService.getStudentById(req.params.id);
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const student = await studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const updatedStudent = await studentService.updateStudent(req.params.id, req.body);
      if (updatedStudent) {
        res.status(200).json(updatedStudent);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deletedStudent = await studentService.deleteStudent(req.params.id);
      if (deletedStudent) {
        res.status(200).json({ message: 'Student deleted' });
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new StudentController();
