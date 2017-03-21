//3. Napisz funkcję randomItem(), która zwróci losowy element podanej tablicy.


function randomItem(randomItem){
var array = [1, 2, 3, 4, 5, 6];

var randomItem = array[Math.floor(Math.random()*array.length)];

console.log(randomItem);
}
console.log(randomItem());
