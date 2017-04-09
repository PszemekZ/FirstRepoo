// Napisz funkcję factors(), która zwróci tablicę wszystkich dzielników podanej liczby.


function factors(number) {
    const factorsArray = [];

    for (let factor = 1; factor <= number / 2; factor++) {
        if (number % factor === 0) {
            factorsArray.push(factor);
        }
    }

    factorsArray.push(number);
    
    return factorsArray;
}

console.log(factors(50)); // 1, 2, 5, 10, 25, 50
console.log(factors(651));
console.log(factors(532));
