function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  // Only change code below this line
  var sourceKey = Object.keys(source);
  console.log("source key/s: \t\t" + Object.keys(source));
  var sourceKeysCount = Object.keys(source).length;
  var matchCount = 0;
  
  for (i=0; i<collection.length; i++) {
    console.log("==============");
    matchCount = 0;
    for (j=0; j<sourceKeysCount; j++) {
      console.log('i = ' + i + ', j = ' + j)
      console.log("==============");
      if (collection[i].hasOwnProperty(sourceKey[j])) {
        console.log("matching key exists");
        console.log("collection[" + i + "] = " + collection[i]);
        console.log("collection[" + i + "][" + sourceKey + "] = " + collection[i][sourceKey]);
        console.log("sourceKey[" + j + "] = " + sourceKey[j]);
        console.log("source[" + sourceKey + "] = " + source[sourceKey]);
        
        if (collection[i][sourceKey] == source[sourceKey])
          matchCount += 1;
        if (matchCount === sourceKeysCount) {
          console.log("values match");
          arr.push(collection[i]);
        } else {
          console.log("values don't match");
        }
      }
    }
  }
  console.log('done');
  console.log(arr);  // Only change code above this line
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });