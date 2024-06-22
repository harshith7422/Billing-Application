require('dotenv').config(); // Add this line at the top
const express = require('express');
const passport = require('./config'); // Ensure this is correctly required from your config file
const session = require('express-session');

const app = express();

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Billing Platform');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
