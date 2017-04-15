// Napisz funkcję modulo(from, to, n), która zwróci tablicę wszystkich liczb podzielnych przez n z podanego przedziału.

function modulo(from, to, n) {
    const numbers = [];

    for (let i = from; i <= to; i++) {
        if (i % n === 0) {
            numbers.push(i);
        }
    }

    return numbers;
}

console.log(modulo(2, 10, 4)); // 4, 8
console.log(modulo(4, 50, 7)); // 7, 14, 21, 28, 35, 42, 49
