// Napisz funkcję getLongestWord(), która jako parametr przyjmie łańcuch znaków (wyrazy
// rozdzielone spacją) i zwróci najdłuższy wyraz.


function getLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (let index = 1; index < words.length; index++) {
        const currentElement = words[index];

        if (currentElement.length > longestWord.length) {
            longestWord = currentElement;
        }
    }

    return longestWord;
}

console.log(getLongestWord("dupa dsw greg grehth")); // grehth
console.log(getLongestWord("gejio eorjwe jqnwkne")); // jqnwkne
