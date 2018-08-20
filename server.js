//require express framework to access features
const express = require('express');

//calls the express app calls methods for server
const app = express();

// get request to '/' responds with hello world
app.get('/', (req, res) => res.send('Hello World!'))

//creates a server with express 
//starts the server, listens for requests at port #3000
const server = app.listen(3000);