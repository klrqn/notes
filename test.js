function oddOrEven(num) {
    if (Number.isInteger(num)) {
        if (num % 2 == 0) {
            return "even";
        } else {
            return "odd";
        }   
    }
    return NaN;
}

console.log(oddOrEven(2));
console.log(oddOrEven(3));
console.log(oddOrEven(5));
console.log(oddOrEven(7));
console.log(oddOrEven(10000));
console.log(oddOrEven('hello'));

// test git test wtv