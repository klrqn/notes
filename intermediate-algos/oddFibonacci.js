var i;
var fib = []; // Initialize array!

function fibArray(num) {
  fib[0] = 0;
  fib[1] = 1;
  for(i=2; i<=num; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
  }
}


function sumFibs(num) {
  fibArray(num);
    fib.map(function(total, num){
    if (num % 2 == 1) {
      return total + num;
    }
  });
}

console.log(sumFibs(3));
console.log(sumFibs(2));
console.log(sumFibs(8));
console.log(sumFibs(5));