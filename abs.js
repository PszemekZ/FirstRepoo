// Napisz funkcję abs(), która przyjmie dowolną liczbę argumentów i zwróci ten o największej wartości bezwzględnej.

function abs(...numbers) {
    return Math.max.apply(-Infinity, numbers.map(Math.abs));
}
console.log(abs(2, 3, 5, 6, -52, -1));
console.log(abs(-74, -23, 214, -732, 0));
