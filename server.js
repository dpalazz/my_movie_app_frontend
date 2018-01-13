const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;
app.listen(PORT, console.log('My Movies App on PORT:', PORT));

// ==============
// MIDDLEWARE
// ==============

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));

// ==============
// ROUTES
// ==============

app.get('/mymovieapp', (req, res) => {
  res.sendfile("public/index.html");
});

app.get('/movies', (req, res) => {
  res.sendfile("public/movies.html");
});

app.get('/movies', (req, res) => {
<<<<<<< HEAD
  res.sendfile("public/actors.html");
=======
  res.sendfile('public/index.html');
>>>>>>> 7d4b2462fed866c483c99c13841ee9bfe3d77c8f
});
