
function sumAll(arr) {
  
  // sort from highest to lowest
  // var sortedArr = arr.sort((a,b) => a-b);
  arr.sort(function(a,b){
    return b-a;
  });
  var count = 0;
  
  // sum all in between
  for (i=arr[1]; i<=arr[0]; i++){
    count += i;
  }
  return count;
}

sumAll([1, 4]);