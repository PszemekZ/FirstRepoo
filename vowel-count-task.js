// Napisz funkcję vowelCount(), która zwróci liczbę samogłosek w podanym łańcuchu
// znaków.

function vowelCount(string) {
    const vowels = string.match(/[aeiouy]/gi);
    return vowels === null ? 0 : vowels.length;
}

console.log(vowelCount("dupa")); // 2
console.log(vowelCount("ZIemnIaki")); // 5
