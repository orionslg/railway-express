const prisma = require('../config/prisma');

async function getAllBooks() {
  try {
    const books = await prisma.book.findMany();

    return books;
  } catch (err) {
    throw err;
  }
};

async function createBook(book) {
  console.log(book);
  try {
    return await prisma.book.create({
      data: book
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllBooks,
  createBook
};
