// Napisz funkcję factors(), która zwróci tablicę wszystkich dzielników podanej liczby.


function factors(number) {
    const factorsArray = [];

    for (let factor = 1; factor <= Math.sqrt(number); factor++) {
        if (number % factor === 0) {
            factorsArray.push(factor);

            if (factor !== Math.sqrt(number)) {
                factorsArray.push(number / factor);
            }
        }
    }

    return factorsArray.sort(function(a, b) {
        return a - b;
    });
}

console.log(factors(50)); // 1, 2, 5, 10, 25, 50
console.log(factors(651));
console.log(factors(25)); // 1, 5, 25
