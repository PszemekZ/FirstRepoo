// Napisz funkcję, isPalindrome(), która sprawdzi, czy podane słowo jest palindromem.

function isPalindrome(string) {
    const palind = string.split('').reverse().join('');

    if (palind == string) {
        return true;
    }

    return false;
}

console.log(isPalindrome("dupa")); //false
console.log(isPalindrome("zaraz")); //true
console.log(isPalindrome("sdfsadgfasgsg")); //false
