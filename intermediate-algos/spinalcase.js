function spinalCase(str) { 
  var a = str.split('').map(function(entity){
    return entity.replace(/[^a-zA-Z]/, "-");
  });
  for (var i=1; i<a.length; i++){
    console.log('a[' + i + '] = ' + a[i]);
    if (a[i] == a[i].toUpperCase() && a[i] != '-') {
      a.splice(i, 0, '-'); // TODO: BUG! Unshifts infinite loop...
      i++;
      console.log('a = ' + a);
    }
  }
  console.log(a.join('').toLowerCase().replace(/--/gi, '-'));
  return a.join('').toLowerCase().replace(/--/gi, '-');
}
 
spinalCase("This Is Spinal Tap");
// return "this-is-spinal-tap". 

spinalCase("thisIsSpinalTap");
// return "this-is-spinal-tap". 

spinalCase("The_Andy_Griffith_Show") ;
// return "the-andy-griffith-show". 

spinalCase("Teletubbies say Eh-oh") ;
// return "teletubbies-say-eh-oh". 

spinalCase("AllThe-small Things") ;
// return "all-the-small-things