// Syntax
// str.search(regexp)

var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;

str.search(re);
// return 4

str.search(re2);
// returns -1