// REFACTOR - USE .filter() .map() , and && || 

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKey = Object.keys(source);
  console.log("source keys: \t\t" + Object.keys(source));
  var sourceKeysCount = Object.keys(source).length;
  var matchCount = 0;
  
  for (i=0; i<collection.length; i++) {
    matchCount = 0;
    for (j=0; j<sourceKeysCount; j++) {
      if (collection[i].hasOwnProperty(sourceKey[j])) {
        console.log("collection[i] = " + collection[i]);
        console.log("sourceKey[j] = " + sourceKey[j]);
        if (collection[i][sourceKey] == source[sourceKey]) {
          matchCount += 1;
        }
        if (matchCount === sourceKeysCount) {
          arr.push(collection[i]);
        }
      }
    }
  }
  console.log('done');
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], 
                { "a": 1, "b": 2 });
                
