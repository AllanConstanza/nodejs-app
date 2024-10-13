//Need to import Express.js library 
//require(express) brings in the express module from node_modules
const express = require('express');

//initializeds instance of express and assisg to variable app
const app = express();

// Define a route for the root URL ('/') that returns a JSON response
//Also have a callback function 
app.get('/', (req, res) => {
  const response = {
    message: "My name is Allan Constanza",
    timestamp: Date.now()
  };

  // Send formatted JSON response
  res.send(JSON.stringify(response, null, 2));  // '2' indicates the indentation level
});


// Start the server and listen on port 3000
//check if theres an environment variable called PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { //starts express server, listen for requests on PORT
  console.log(`Server is running on port ${PORT}`); //prints message to console
});
