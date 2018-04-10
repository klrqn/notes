function sumFibs(num) {
  var previousN = 0;
  var currentN = 1;
  var result = 0;
  
  while (currentN <= num){
    if (currentN % 2 != 0) {
      result += currentN;
    }
      currentN += previousN;
      previousN = currentN - previousN;
  }
  console.log(result);
  return result;
}


sumFibs(4);