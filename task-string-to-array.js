// Napisz funkcję stringToArray(), która skonwertuje łańcuch znaków na listę słów.

function stringToArray(string) {
    const words = string.split(' ');

    for (let index = 0; index < words.length; index++) {
        return words;

    }
}

console.log(stringToArray("placki ziemniaczane z mielonym"));
console.log(stringToArray("nieoczywiste związki pokoleniowego wstydu i dumy"));
