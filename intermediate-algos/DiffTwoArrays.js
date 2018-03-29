// MY SOLUTION
function diffArray(arr1, arr2) {
    var newArr = [];
    var arr1Loc, arr2Loc;
    for (i=0; i<arr1.length; i++){
        arr1Loc = arr1[i];
        if (!isIn(arr2, arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    for (i=0; i<arr2.length; i++){
        arr2Loc = arr2[i];
        if (!isIn(arr1, arr2[i])) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

// checks if a number is in an array - boolean
function isIn(arr, num) {
    console.log(arr.indexOf(num));
    if (arr.indexOf(num) >= 0)
        return true;
    else 
        return false;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Intermediate Solution!
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Advanced
function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);