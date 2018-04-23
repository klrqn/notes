// An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. 
// These function expressions are best suited for non-method functions, and they cannot be used as constructors.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var MDN_ex = " https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "
var READTHIS = " https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions "

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]



var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements .map(function(elements ) { 
  return elements .length; 
}); // [8, 6, 7, 9]

elements .map((elements ) => {
  return elements .length;
}); // [8, 6, 7, 9]

materials.map(({length}) => length); // [8, 6, 7, 9]















