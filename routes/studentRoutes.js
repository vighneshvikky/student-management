const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/students', studentController.getAll);
router.get('/students/:id', studentController.getById);
router.post('/students', studentController.create);
router.put('/students/:id', studentController.update);
router.delete('/students/:id', studentController.delete);

module.exports = router;
