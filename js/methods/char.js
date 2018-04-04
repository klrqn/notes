// charAt
var aString = 'testString';

var index0 = aString.charAt(0);
// return 't'
console.log(index0);

console.log(aString.charAt(2));
// prints 's'



var alphabet = 'abcdefghijklmnopqrstuvwxyz';

// charCodeAt
console.log(alphabet.charCodeAt('a'));
// prints '97';
console.log(alphabet.charCodeAt('b'));
// prints '98';



//fromCharCode
console.log(String.fromCharCode(97));
// prints 'a'
console.log(String.fromCharCode(98));
// prints 'b'