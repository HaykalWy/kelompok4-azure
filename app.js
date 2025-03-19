const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing body request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route untuk halaman utama
app.get('/', (req, res) => {
  res.render('index');
});

// Route untuk halaman form
app.get('/form', (req, res) => {
  res.render('form');
});

// Route untuk menerima data form
app.post('/submit', (req, res) => {
  const { nama, email } = req.body;
  res.render('success', { nama, email });
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});