function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKey = Object.keys(source);
  console.log("source keys: \t\t" + Object.keys(source));
  
  for (var i=0; i<collection.length; i++){
      console.log("collection keys: \t" + Object.keys(collection[i]));
      if (Object.keys(collection[i].hasOwnProperty(Object.keys(source)))) {
          if (collection[i][sourceKey] == source[sourceKey]) {
            arr.push(collection[i]);
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