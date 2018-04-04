function pairElement(str) {
  var foundPairs = [];

  var pairs = {
    G: ["G", "C"],
    C: ["C", "G"],
    A: ["A", "T"],
    T: ["T", "A"]
  };
  for (var i = 0; i < str.length; i++) {
    console.log('i = ' + i);
    console.log('Object.keys(pairs)[i] = ' + Object.keys(pairs)[i]);
    console.log('str[i] = ' + str[i]);

    foundPairs.push(pairs[str[i]]);

    // if (Object.keys(pairs)[i] == str[i]) {
    //   console.log("if (Object.keys(pairs)[i] == str[i]) { ...");
    //   // this doesn't work because .values is unsupported in many browsers
    //   // foundPairs.push(Object.values(pairs)[i]);

    //   //   var vals = Object.keys(pairs).map(function(key) {
    //   //     console.log(pairs[key]);
    //   //     return pairs[key];
    //   //     });
    //   var vals = Object.keys(pairs).map(function (key) {
    //     // console.log(pairs[key]);
    //     return pairs[key];
    //   });

    //   console.log('vals = ' + vals);
    //   console.log('vals[i] = ' + vals[i]);
    //   // foundPairs.push(vals[i]);
    //   foundPairs.push(vals[i]);
    console.log(foundPairs);
    // }
  }
  return foundPairs;
}
