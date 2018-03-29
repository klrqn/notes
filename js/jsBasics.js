// comment
/* multi-line comment */
var a;
// When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined". 

/* Escape Chars
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
*/

"someString".length; // 10
"someString"[0]; // "s"

// In JavaScript, String values are immutable, which means that they cannot be altered once created.

var firstName = "Scott";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var arr = [1,2,3,4]
arr.push(5);        // [1,2,3,4,5]
arr.pop();          // [1,2,3,4]
arr.shift();        // [2,3,4]
arr.unshift(1);     // [1,2,3,4]

// SPLICE
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index positionce(1, 0, 'Feb');
// arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// SLICE
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

// indexOf.
'Blue Whale'.indexOf('Blue');     // returns  0
'Blue Whale'.indexOf('Blute');    // returns -1
'Blue Whale'.indexOf('Whale', 0); // returns  5
'Blue Whale'.indexOf('Whale', 5); // returns  5
'Blue Whale'.indexOf('Whale', 7); // returns -1
'Blue Whale'.indexOf('');         // returns  0
'Blue Whale'.indexOf('', 9);      // returns  9
'Blue Whale'.indexOf('', 10);     // returns 10
'Blue Whale'.indexOf('', 11);     // returns 10

/*
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.
*/

// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

"3"  ==  3  // true - equality operator
3 === 3     // true
3 === '3'   // false - strict equality operator
1 != '1'    // false - inequality operator
1 !== '1'   // true - strict inequality operator

var isitAnd = 4 < 5 && 5 < 6;  // true
var isitOr = 4 < 5 || 5 < 6;  // true

// Switch Statements
// if you have many options to choose from
function caseInSwitch(val) {
  var answer = "";
  switch(val){
    case 1:
      answer += "alpha";
      break;
    case 2:
      answer += "beta";
      break;
    case 3:
      answer += "gamma";
      break;
    case 4: 
      answer += "delta";
      break;
    default:
      answer += "this is the default return";
  }
  return answer;  
}

// multiple identical options in switch statements.
var val, result;
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

// Objects

var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in it, you will need to use bracket notation. Here is a sample of using bracket notation to read an object property:

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  noSpaces: "spaceman"
};
myObj["Space Name"]; // Kirk

// updating object properties
myObj['More Space'] = "John"
myObj.noSpaces = "change with a dot bc no spaces!"

var lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank"
};

lookup.hasOwnProperty("alpha");   // true
lookup.hasOwnProperty("beta");    // false

Math.random() // returns a fraction between 0-1
Math.floor()

// Generate a random number between a range
var max = 20, min = 10;
var someRando = Math.floor(Math.random() * (max - min + 1)) + min;


// MAP METHOD
// The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it. Note that it does not modify the original array.
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});

// INDEXOF METHOD
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// expected output: 1
console.log(beasts.indexOf('bison', 2))
// expected output: 4 - fromIndex 2 
console.log(beasts.indexOf('giraffe'));
// expected output: -1


// REDUCE METHOD
// The array method reduce is used to iterate through an array and condense it into one value.
// To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).
// The accumulator is like a total that reduce keeps track of after each operation. The current value is just the next element in the array you're iterating through.
// reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.
var arr = [1,2,3,4,5];
var singleVal = arr.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);


// FILTER METHOD
// The filter method is used to iterate through an array and filter out elements where a given condition is not true.
array = array.filter(function(val) {
  return val !== 5;
});
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// SORT METHOD
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;
});

// REVERSE METHOD
var myArray = [1, 2, 3];
myArray.reverse();

// CONCAT METHOD
var oldArray = [1,2,3];
var concatMe = [4,5,6];

var newArray = oldArray.concat(concatMe);

//SPLIT METHOD
var string = "Split me into an array";
arr = [];

arr = string.split(" ");

//JOIN METHOD
arr = string.join(" ");

// SLICE METHOD
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// SPREAD SYNTAX
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
// expected output: 6
console.log(sum.apply(null, numbers));
// expected output: 6
// Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.