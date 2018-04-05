// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

var htmlChars = {
  "&":  "&amp;",
  '"': "&quot;",
  "'": "&apos;",
  ">": "&gt;",
  "<": "&lt;"
}

function convertHTML(str) {
  var htmlStr = [];
  for (i=0; i<str.length; i++){
    if (htmlChars.hasOwnProperty(str[i])){
      htmlStr.push(htmlChars[str[i]]);
    } else {
      htmlStr.push(str[i]);
    }
  }
  
  console.log(htmlStr.join(""));
  return htmlStr.join("");
}

convertHTML("Dolce & Gabbana")
convertHTML("Dolce & > < '  Gabbana")

function convertHTML_better_advanced(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  var htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');
}
