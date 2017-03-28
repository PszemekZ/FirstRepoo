// Napisz funkcję, isPalindrome(), która sprawdzi, czy podane słowo jest palindromem.

function isPalindrome(string) {
    const reversedString = string.split('').reverse().join('');
    return reversedString === string;

}

console.log(isPalindrome("dupa")); // false
console.log(isPalindrome("zaraz")); // true
console.log(isPalindrome("sdfsadgfasgsg")); // false
