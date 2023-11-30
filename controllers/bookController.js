const bookService = require('../services/bookService');

async function getAllBooks(req, res)  {
  const books = await bookService.getAllBooks();

  res.json(books);
};

async function createBook(req, res) {
  const book = req.body;

  const createdBook = await bookService.createBook(book);
  res.status(201).json(createdBook);
};

module.exports = {
  getAllBooks,
  createBook
};
