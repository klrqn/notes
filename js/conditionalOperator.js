It's called a Conditional (ternary) Operator. It's essentially a condensed if-else.

================================================================================
So this:

var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
================================================================================
...is the same as this:

var array;
if (typeof objArray != 'object') {
    array = JSON.parse(objArray);
} else {
    array = objArray;
}
================================================================================