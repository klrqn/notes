// charCodeAt
// fromCharCode



function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var count = str.charCodeAt(str[0]);
  // console.log('count = ' + count + ', char = ' + String.fromCharCode(count));
  
  for (i =0; i<str.length; i++) {
    console.log('count = ' + count + ', char = ' + String.fromCharCode(count));
    if (String.fromCharCode(count) != str[i]) {
      console.log('return is: ' + String.fromCharCode(count));
      return String.fromCharCode(count);
    }
    count++;
  }
  
  // while ((count-97) < alphabet.length) {
  //   console.log("String.fromCharCode(count) = " + String.fromCharCode(count));
  //   console.log("str[97-count] = " + str[count-count]);
  //   if (String.fromCharCode(count) != str[count-count]) {
  //     console.log('return is: ' + String.fromCharCode(count));
  //     return String.fromCharCode(count);
  console.log('noletter');
  return -1;
}

fearNotLetter("bcdefghijklmnoq");
