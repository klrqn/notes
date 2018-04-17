
function smallestCommons(arr) {
  //sort array
  arr.sort();
  
  //array of range
  var allNums = [];
  for (var i=arr[0]; i<=arr[1]; i++){
    allNums.push(i);    
  }
  
  // greatest common denominator
  function gcd(a, b){
    return !b ? a : gcd(b, a % b);
  }
  
  // lowest common multiple
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  var multiple = arr[0];
  allNums.forEach(function(n) {
    multiple = lcm(multiple, n);
  });
  
  return multiple;
}


console.log(smallestCommons([5,1]));
