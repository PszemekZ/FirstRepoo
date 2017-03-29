// Napisz funkcję vowelCount(), która zwróci liczbę samogłosek w podanym łańcuchu
// znaków.

function vowelCount(string) {
    const numberOfVowels = string.match(/[aeiou]/gi);
    return numberOfVowels === null ? 0 : numberOfVowels.length;
}

console.log(vowelCount("dupa")); // 2
console.log(vowelCount("ZIemnIaki")); // 5
