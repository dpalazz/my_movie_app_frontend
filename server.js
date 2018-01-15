const express = require('express');
const app = express();
const session = require('express-session');
const PORT = 3001 || process.env.PORT;
app.listen(PORT, console.log('My Movies App on PORT:', PORT));

// ==============
// MIDDLEWARE
// ==============

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(session({
  secret: '254khsdf9fhhh00sdfasdf0dsf08',
  resave: false,
  saveUninitialized: false
}));
app.use(express.static('public'));

// ==============
// CONTROLLERS
// ==============
const moviesController = require('./controllers/movies.js')
const ratingsController = require('./controllers/ratings.js')
const sessionsController = require('./controllers/sessions.js')

// ==============
// USE OF CONTROLLERS
// ==============

// app.use('/session', sessionsController);
app.use('/movies', moviesController);
app.use('/ratings', ratingsController);

// ==============
// ROUTES
// ==============

app.get('/', (req, res) => {
  res.render("index.ejs");
});
