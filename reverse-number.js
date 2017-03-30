// Napisz funkcję reverseNumber(), która odwróci podaną liczbę (1234 => 4321)

function reverseNumber(number) {
    return parseInt(number.toString().split("").reverse().join(''), 10);
}

console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(345)); // 123
console.log(reverseNumber(1532)); // 2351
console.log(reverseNumber(343)); // 343
