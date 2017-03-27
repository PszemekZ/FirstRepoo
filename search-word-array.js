// Napisz funkcję search(word, array), która zwróci pierwszy element podanej tablicy,
// zawierający podane słowo lub false, jeśli słowo nie zostanie znalezione.

function search(word, array) {
    for (let index = 0; index < array.length; index++) {
        const currentElement = array[index];

        if (currentElement.includes(word)) {
            return currentElement;
        }
    }

    return false;
}

const arrayOne = ['Iza', '321', '', '<>?}', 'huje moje lol jp50%'];

console.log(search("lol", arrayOne)); // 'huje moje lol jp50%'
console.log(search("g", arrayOne)); // false
