
function findElement(arr, func) {
  // filter array with function provided
  var filterArr = arr.filter(func); 
  
  // return the first element that returns true or undefined in none do
  return filterArr[0];
  
  // ===========
  // as one line
  return arr.filter(func)[0];
  // alternately
  return arr.filter(func).shift();
  // ?
  return arr.find(func);
  // ===========
  
}

findElement([1, 2, 3, 4], function(num){ 
  return num % 2 === 0; 
});

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });