// flatten nested array

function steamrollArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}
  
// flattened is [0, 1, 2, 3, 4, 5]

const flatten = (arr) => arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);







console.log(steamrollArray([1, [2], [3, [[4]]]]));
steamrollArray([1, [2], [3, [[4]]]]);

console.log(flatten([1, [2], [3, [[4]]]]));
flatten([1, [2], [3, [[4]]]]);