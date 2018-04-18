
function findElement(arr, func) {
  
  // var num;
  
  for (var i=0; i<arr.length; i++) {
    if (func(arr[i])) {
      console.log(arr[i]);
      // num = arr[i];
      return arr[i];
      // return num;
    }
  }
  console.log(undefined);
  return undefined;
}

findElement([1, 2, 3, 4], function(num){ 
  return num % 2 === 0; 
});

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });