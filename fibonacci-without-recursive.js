// Napisz funkcję fibonacci(n), która, nie używając rekurencji, zwróci n-ty wyraz Ciągu Fibonacciego.

function fibonacci(n) {
    if (n < 2) {
        return n;
    }

    let a = 0,
        b = 1,
        c = 1;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(3)); // 2
