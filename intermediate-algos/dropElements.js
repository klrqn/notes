
function dropElements(arr, func) {
  // Drop them elements.

  while (true) {
      var count = 0;
      if (!func(arr[count])) {
          console.log('arr[' + count + '] = ' + arr[count]);
          arr.shift();
      } else {
          console.log(arr);
          return arr;
      }
  }
  return arr;
}

dropElements([1, 2, 2, 1, 3, 4, 2], function(n) {return n > 3; });
