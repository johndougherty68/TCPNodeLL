// Core node package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then write the movie names in the file
fs.writeFile("movies.txt", "Star Wars, The Godfather", function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("movies.txt was updated!");

});
