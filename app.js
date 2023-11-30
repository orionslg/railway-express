require('dotenv').config();
const express = require('express');

const app = express();

const bookRoutes = require('./routes/bookRoutes');

app.use(bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
