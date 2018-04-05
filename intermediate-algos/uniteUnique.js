Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

function uniteUnique(arr) { 
  var merged = [].concat.apply([], arguments);
  console.log(merged);
  console.log(merged.unique().sort());
  
  return merged.unique().sort();
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// //uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// var arrayofArrays = [[1, 3, 2], [5, 2, 1, 4], [2, 1]];
// var merged = [].concat.apply([], arrayofArrays);