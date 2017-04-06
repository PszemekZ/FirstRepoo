// Napisz funkcję firstUppercase(), która przyjmie zdanie i zamieni pierwszą literę każdego
// słowa na wielką.

function firstUppercase(string) {
    return string.split(" ").map(function(words) {
        return words.charAt(0).toUpperCase() + words.slice(1);
    }).join(" ");
}

console.log(firstUppercase("zamiEni pierwszą literę każego słowa na wielką"));
console.log(firstUppercase("We're sorry, we couldn't find what you were looking for."));
