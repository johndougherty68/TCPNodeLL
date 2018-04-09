var foo = {
  animal: "dog",
  food: "apple",
  drink: "tea"
};

var bar = {
  places: ["here", "there", "everywhere"]
};

var noSee = {
  thing: "ghost"
};

function canRunMe(name){
  return "Hello, " + name;
}

function cannotRunMe(name){
  return "Hello, " + name;
}

// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

module.exports = {
  foo: foo,
  bar: bar,
  sayHello: canRunMe
};