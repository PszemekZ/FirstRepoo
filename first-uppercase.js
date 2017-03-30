// Napisz funkcję firstUppercase(), która przyjmie zdanie i zamieni pierwszą literę każdego
// słowa na wielką.

function firstUppercase(string) {
    return string.toLowerCase().replace(/^.|\s\S/g, function(a) {
        return a.toUpperCase();
    });
}

console.log(firstUppercase("zamiEni pierWSzą literę kaŻDego słOwa na wielKą"));
console.log(firstUppercase("We're sorry, we couldn't find what you were looking for."));
