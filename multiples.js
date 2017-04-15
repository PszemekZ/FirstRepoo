//  Napisz funkcję multiples(a,b), która zwróci tablicę
//  wszystkich wielokrotności a mniejszych od b.

function multiples(a, b) {
    const numbers = [];

    for (let i = a; i < b; i++) {
        if (i % a === 0) {
            numbers.push(i);
        }
    }

    return numbers;
}

console.log(multiples(2, 10)); // 2, 4, 6, 8
console.log(multiples(4, 16)); // 4, 8, 12
console.log(multiples(7, 23)); // 7, 14, 21
