// Napisz funkcję reverseNumber(), która odwróci podaną liczbę (1234 => 4321)

function reverseNumber(number) {
    const newNumber = number.split("").reverse().join('');
    return newNumber;

}

console.log(reverseNumber("1234")); //4321
console.log(reverseNumber("345")); //123
console.log(reverseNumber("1532")); //2351
console.log(reverseNumber("343")); //343
