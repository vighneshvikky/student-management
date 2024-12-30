class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }

    async getAllStudents(req, res) {
        try {
            const students = await this.studentService.getAllStudents();
            res.json(students);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getStudentById(req, res) {
        try {
            const student = await this.studentService.getStudentById(req.params.studentId);
            res.json(student);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async createStudent(req, res) {
        try {
            const student = await this.studentService.createStudent(req.body);
            res.status(201).json(student);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateStudent(req, res) {
        try {
            const student = await this.studentService.updateStudent(
                req.params.studentId,
                req.body
            );
            res.json(student);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async deleteStudent(req, res) {
        try {
            await this.studentService.deleteStudent(req.params.studentId);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = StudentController;
