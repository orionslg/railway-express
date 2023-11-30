const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/books', bookController.getAllBooks);
router.post('/books', bookController.createBook);

module.exports = router;
