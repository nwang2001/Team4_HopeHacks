require('dotenv').config();
const fs = require('fs');
const apiKey = process.env.API_KEY;
const path = require('path');
const express = require('express');
const hbs = require('hbs');
// const search_exercise = require('./utils/search-exercise.js');

// Create an Express application
const app = express();


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup static directory to serve
app.set('view engine', 'hbs'); // Set the view engine to handlebars
app.set('views', viewsPath) // Set the views directory path
app.use(express.static(publicDirectoryPath)); // Serve static files from the public directory
hbs.registerPartials(partialsPath) // Register partials for handlebars

app.get('/', (req, res) => {
    res.render('index', {
        title: "home",
        name:"erick"
    })
})


// Route for the builder page
app.get('/builder', (req, res) => {
    res.render('builder', {
        title: "Workout Builder",
        name: "erick"
    });
});

// Route for the profile page
app.get('/profile', (req, res) => {
    res.render('profile', {
        title: "Profile",
        name: "erick"
    });
});

// Start the server on port 4400
const port = 4400;
app.listen(port, () => {
    console.log(`Server is up on http://localhost:${port}/`);
})
 