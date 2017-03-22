//3. Napisz funkcję randomItem(), która zwróci losowy element podanej tablicy.

var array = [1, 2, 3, 4, 5, 6];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
console.log(randomItem(array));
