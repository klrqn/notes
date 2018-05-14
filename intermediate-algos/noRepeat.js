

//Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

//For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    console.log(results);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    console.log("firstChar = " + firstChar);
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    console.log("charsLeft = " + charsLeft);
    var innerPermutations = getAllPermutations(charsLeft);
    console.log("innerPermutations = " + innerPermutations);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
      console.log(results);
    }
  }
  return results;
}

// console.log(getAllPermutations('abc'));

function noRepeats(lst) {
  var returnLst = []
  for (i=0; i<lst.length; i++){
    for (j=1; j<lst[i].length; j++) {
      if (lst[i][j] == lst[i][j-1]) {
        break;
      } else if (lst[i].length == j+1) {
        returnLst.push(lst[i]);
      }
    }
  }
  return returnLst;
}


function permAlone(str) {
  var allPerms = getAllPermutations(str);
  var noneRepeated = noRepeats(allPerms);
  return noneRepeated;
  
}

permAlone('aab');