// Napisz funkcję factorial(n), która rekurencyjnie zwróci silnię podanej liczby.

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return factorial(n - 1) * n;
}

console.log(factorial(0)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
