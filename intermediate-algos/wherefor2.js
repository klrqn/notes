 function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);
  var srcKeysLen = srcKeys.length;
  
  // matchCount must = srcKeysLen after each object check before push to new arr
  var matchesCount;
  
  // for each object in the collection 
  for (var i=0; i<collection.length; i++) {
  // reset count to 0 to make sure all keys from source are in collection
  matchesCount = 0;
  // for each object in the source array:
    for (var j=0; j<srcKeysLen;j++) {
      
      console.log("collections[" + i + "] = " + collection[i].value+ ": ");
      console.log("srcKeys[j] = " + srcKeys[j]);
      console.log("collection[i].hasOwnProperty(srcKeys[j]) = " + collection[i].hasOwnProperty(srcKeys[j]));
      // if the key is in both source and collection
      if (collection[i].hasOwnProperty(srcKeys[j])) {
        
        // if both values match 
        console.log("collection[i][srcKeys[j]] = " + collection[i][srcKeys[j]]);
        console.log("srcKeys[j] = " + srcKeys[j]);
        if (collection[i][srcKeys[j]] == srcKeys[j]) {
          
          // that key:value pair matches, add to count of matching pairs
          matchesCount++;
          console.log("matchesCount = " + matchesCount);
        }
        // if all source's key:value paris are matched in collection
        if (matchesCount == srcKeysLen)
          // add collection Object to new array
          arr.push(collection[i]);
          console.log(arr);
      }
    }
  }
  // Only change code above this line
  console.log(arr)
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2, "c": 2, "b": 2 }], { "a": 1, "b": 2 });