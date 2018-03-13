example 1, find the:

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