================================================================================
REFERENCE:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
================================================================================


example 1, find 'the':

/the/gi

slashes are the beginning and end of expression
"g" means global
"i" means ignore case

/\d+/g
"\d" is looking for a digit
"+"     cant match with more than one

The trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the first match.

The whitespace regex looks like this:
/\s+/g
The whitespace characters are " " (space), \r (the carriage return), \n (newline), \t (tab), and \f (the form feed).

You can invert any match by using the uppercase version of the regular expression selector.

For example, \s will match any whitespace, and \S will match anything that isn't whitespace.


The following is the/a correct regex to strip non-alphanumeric chars from an input string:

input.replace(/\W/g, '')
Note that \W is the equivalent of [^0-9a-zA-Z_] - it includes the underscore character. To also remove underscores use e.g.:
"\\test\\red\\bob\\fred\\new".replace(/\W/g, '')
"testredbobfrednew" // output

================================================================================

RegExp.prototype.exec()
The exec() method executes a search for a match in a specified string. Returns a result array, or null.
If you are executing a match simply to find true or false, use the RegExp.prototype.test() method or the String.prototype.search() method.

var regex1 = RegExp('foo*','g');
var str1 = 'table football, foosball';
var array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}


RegExp.prototype.test()
The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.

var regex1 = RegExp('foo*');
var regex2 = RegExp('foo*','g');
var str1 = 'table football';

console.log(regex1.test(str1));
// expected output: true

console.log(regex1.test(str1));
// expected output: true

console.log(regex2.test(str1));
// expected output: true

console.log(regex2.test(str1));
// expected output: false
