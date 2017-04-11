// Napisz funkcję triangle(), która w zależności od liczby argumentów obliczy
// pole trójkąta na podstawie długości podstawy i wysokości lub na podstawie długości wszystkich jego boków.


function triangle(a, h, c) {

    if (c === undefined) {
        return (a * h) / 2;
    } else {
        let perimeter = (a + h + c) / 2;
        return Math.sqrt(perimeter * ((perimeter - a) * (perimeter - h) * (perimeter - c)));
    }
}

console.log(triangle(3, 4, 5));
console.log(triangle(3, 4));
console.log(triangle(2, 6, 7));
console.log(triangle(5, 3, 6));
console.log(triangle(7, 3))
