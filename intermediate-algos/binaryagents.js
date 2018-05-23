function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));



function binaryAgent(str) {
  var strReturn = ""
  var strArr = str.split(" ");
  for (l in strArr){
    strReturn += String.fromCharCode(bin_to_dec(strArr[l]));
  }
  console.log(strReturn);
  
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
