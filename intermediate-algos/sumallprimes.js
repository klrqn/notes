function sumPrimes(num) {
    var result = 2;

    
    // create array to test
    for (var i = 3; i <= num; i++) {
        for (var j = 2; j < num; j++) {
            if (i % j == 0)
                break;
            else if (i-1 == j)
                result += i;
        }
    }

    console.log(result);
    return result;
}

sumPrimes(977);