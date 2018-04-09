// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 8080;

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

// Routes
// =============================================================


// Search for Specific Department (or all departments) - provides JSON
app.get("/deptartments/:dept?", function(req, res) {
  var department = req.params.dept;

  if (department) {
    console.log(department);

    for (var i = 0; i < depts.length; i++) {
      if (department === depts[i].routeName) {
        return res.json(depts[i]);
      }
    }
    return res.json(false);
  }
  return res.json(depts);
});

// Default route - send to /api
app.get("/", function(req, res){
  res.redirect("/deptartments");
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
