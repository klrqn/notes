function fibonacciArray(n) {
  var previousFirst = 0, previousSecond = 1, next = 1, fibArray = [0, 1];;
  
  for (var i=0; i<=n-3; i++){
    next = previousFirst + previousSecond;
    previousFirst = previousSecond;
    previousSecond = next;
    fibArray.push(next);
  }
  // console.log(fibArray);
  return fibArray;
}

function sumOdds(arr) {
  console.log(arr);
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "] = " + arr[i]);
    console.log("sum = " + sum);
    if (arr[i] % 2 == 1) {
      console.log('adding to sum');
      sum += arr[i];
    }
  }
  return sum;
}

console.log(fibonacciArray(10));
console.log(sumOdds(fibonacciArray(10)));