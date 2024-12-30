const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/student');
const StudentService = require('./services/studentService');
const StudentController = require('./controllers/studentController');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

// Updated MongoDB connection without deprecated options
mongoose.connect('mongodb://localhost:27017/student_management')
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Dependency Injection
const studentService = new StudentService(Student);
const studentController = new StudentController(studentService);

// Routes
app.use('/api/students', studentRoutes(studentController));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

