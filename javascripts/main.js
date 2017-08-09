"use strict";


let mainHappy = require("./happy.js");

console.log("mainHappy:", mainHappy);
console.log("mainHappy.setHappy", mainHappy.setHappy('Super'));
console.log("mainHappy.getHappy:", mainHappy.getHappy());

let getTest = require("./test.js");
console.log("getTest:", getTest);


