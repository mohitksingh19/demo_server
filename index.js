// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port for the app to listen on
const port = 3000;

// Set up a simple route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
