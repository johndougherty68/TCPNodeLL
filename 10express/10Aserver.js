var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Departments (DATA)
// =============================================================
var depts = [
    {
      routeName: "boys",
      name: "Boys",
      description: "Clothing for boys"
    },
    {
      routeName: "girls",
      name: "Girls",
      description: "Clothing for girls"
    },
    {
      routeName: "toddlers",
      name: "Toddlers",
      description: "Clothing for toddlers"
    }
  ];

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/":
    return displayAll(path, req, res);

  case "/boys":
    return displayBoys(path, req, res);
  case "/girls":
    return displayGirls(path, req, res);
  case "/toddlers":
    return displayToddlers(path, req, res);

  default:
    return displayAll(path, req, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayAll(url, req, res) {
  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/json" });

  res.end(JSON.stringify(depts));
}

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayBoys(url, req, res) {
  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(depts[0]));
}

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayGirls(url, req, res) {
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/json" });
    res.end(JSON.stringify(depts[1]));
  }
  
// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayToddlers(url, req, res) {
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/json" });
    res.end(JSON.stringify(depts[2]));
  }
  