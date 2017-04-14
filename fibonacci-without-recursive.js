// Napisz funkcję fibonacci(n), która, nie używając rekurencji, zwróci n-ty wyraz Ciągu Fibonacciego.

function fibonacci(n) {
    if (n < 2) {
        return n;
    }

    let currentNumber = 0,
        previousNumber = 1;

    for (let i = 2; i <= n; i++) {
        nextNumber = currentNumber + previousNumber;
        currentNumber = previousNumber;
        previousNumber = nextNumber;
    }

    return nextNumber;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(3)); // 2
