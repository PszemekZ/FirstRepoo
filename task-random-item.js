//3. Napisz funkcję randomItem(), która zwróci losowy element podanej tablicy.

function randomBetween(min, max) {
    const possibleNumbers = max - min + 1;
    return Math.floor(Math.random() * possibleNumbers + min);
}

function randomItem(array) {
    const index = randomBetween(0, array.length - 1);
    return array[index];
}

var array = [1, 2, 3, 4, 5, 6];
var arrayTwo = [17, 18, 19, 20, 21, 22];
var arrayThree = [113, 114, 115, 116, 117];

console.log(randomItem(array));
console.log(randomItem(arrayTwo));
console.log(randomItem(arrayThree));
