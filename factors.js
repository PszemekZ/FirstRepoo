// Napisz funkcję factors(), która zwróci tablicę wszystkich dzielników podanej liczby.


function factors(number) {
    let string = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            string.push(i);
        }
    }

    return string;
}

console.log(factors(50));
console.log(factors(651));
console.log(factors(532));
