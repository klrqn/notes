function remove(array, element) {
    return array.filter(function(e) {
      return e !== element;
    });
}

function destroyer(arr) {
  for (var i=1; i<arguments.length; i++){
    // if the value arg[i] exists in the arg[0] array
    // then remove all instances of arg[i] in arg[0]
    remove(arr, arguments[i]);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);