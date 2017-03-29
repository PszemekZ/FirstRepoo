// Napisz funkcję vowelCount(), która zwróci liczbę samogłosek w podanym łańcuchu
// znaków.

function vowelCount(string) {
    const array = string.match(/[aeiouy]/gi);
    return array === null ? 0 : array.length;
}

console.log(vowelCount("dupa")); // 2
console.log(vowelCount("ZIemnIaki")); // 5
