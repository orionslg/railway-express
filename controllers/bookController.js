function getAllBooks(req, res)  {
  res.json({
    books: [{
      title: 'Jago JavaScript'
    }]
  });
};

module.exports = {
  getAllBooks
};
