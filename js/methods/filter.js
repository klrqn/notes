// array.filter() method

// array1.filter(callbackfn[, thisArg])  
// array1       Required. An array object.
// callbackfn   Required. A function that accepts up to three arguments. 
//                  The filter method calls the callbackfn function one time for each element in the array.
// thisArg      Optional. An object to which the this keyword can refer in the callbackfn function. 
//                  If thisArg is omitted, undefined is used as the this value.

//w3schools
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

console.log(ages.filter(checkAdult));
// [32, 33, 40]

////

function CheckIfPrime(value, index, ar) {
    high = Math.floor(Math.sqrt(value)) + 1;
    
    for (var div = 2; div <= high; div++) {
        if (value % div == 0) {
            return false;
        }
    }
    return true;
}

// Create the original array.  
var numbers = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53];  

// Get the prime numbers that are in the original array.   
var primes = numbers.filter(CheckIfPrime);  

console.log(primes);
// Output: 31,37,41,43,47,53

////

// Create the original array.  
var arr = [5, "element", 10, "the", true];  

// Create an array that contains the string  
// values that are in the original array.  
var result = arr.filter(  
    function (value) {  
        return (typeof value === 'string');  
    }  
);  

console.log(result); 
// Output: element, the  