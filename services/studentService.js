const Student = require('../models/student');

class StudentService {
  async getAllStudents() {
    try {
      return await Student.find();
    } catch (error) {
      throw new Error('Unable to fetch students: ' + error.message);
    }
  }

  async getStudentById(id) {
    try {
      return await Student.findById(id);
    } catch (error) {
      throw new Error('Student not found: ' + error.message);
    }
  }

  async createStudent(studentData) {
    try {
      const student = new Student(studentData);
      return await student.save();
    } catch (error) {
      throw new Error('Unable to create student: ' + error.message);
    }
  }

  async updateStudent(id, studentData) {
    try {
      return await Student.findByIdAndUpdate(id, studentData, { new: true });
    } catch (error) {
      throw new Error('Unable to update student: ' + error.message);
    }
  }

  async deleteStudent(id) {
    try {
      return await Student.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Unable to delete student: ' + error.message);
    }
  }
}

module.exports = new StudentService();
