class StudentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }

    async getAllStudents() {
        try {
            return await this.studentModel.find();
        } catch (error) {
            throw new Error(`Error fetching students: ${error.message}`);
        }
    }

    async getStudentById(studentId) {
        try {
            const student = await this.studentModel.findOne({ studentId });
            if (!student) {
                throw new Error('Student not found');
            }
            return student;
        } catch (error) {
            throw new Error(`Error fetching student: ${error.message}`);
        }
    }

    async createStudent(studentData) {
        try {
            const student = new this.studentModel(studentData);
            return await student.save();
        } catch (error) {
            throw new Error(`Error creating student: ${error.message}`);
        }
    }

    async updateStudent(studentId, updateData) {
        try {
            const student = await this.studentModel.findOneAndUpdate(
                { studentId },
                updateData,
                { new: true }
            );
            if (!student) {
                throw new Error('Student not found');
            }
            return student;
        } catch (error) {
            throw new Error(`Error updating student: ${error.message}`);
        }
    }

    async deleteStudent(studentId) {
        try {
            const student = await this.studentModel.findOneAndDelete({ studentId });
            if (!student) {
                throw new Error('Student not found');
            }
            return student;
        } catch (error) {
            throw new Error(`Error deleting student: ${error.message}`);
        }
    }
}

module.exports = StudentService;
