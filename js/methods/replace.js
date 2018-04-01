// Note: The original string will remain unchanged.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

Syntax
str.replace(regexp|substr, newSubstr|function)
Parameters
regexp (pattern)
A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.
substr (pattern)
A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
newSubStr (replacement)
The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.
function (replacement)
A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.
Return value
A new string with some or all matches of a pattern replaced by a replacement.