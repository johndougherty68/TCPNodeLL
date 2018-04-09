// Using the require keyword lets us access all of the exports
// in our ess.js file
var stuff = require("./moduleToUse.js");

// This will print everything in exports.
console.log("--------------------------");
console.log("Here is what we can see");
console.log(stuff);
console.log("--------------------------");

// These will print correctly because we imported them
console.log("Foo");
console.log(stuff.foo);
console.log("--------------------------");
console.log("Bar");
console.log(stuff.bar);

// This won't print anything
console.log("--------------------------");
console.log("noSee");
console.log(stuff.noSee);

// Will Say hello
console.log("--------------------------");
console.log("sayHello");
console.log(stuff.sayHello("John"));

// Won't Say hello
// console.log("--------------------------");
// console.log("sayHello");
// console.log(stuff.cannotRunMe("John"));
