// Napisz funkcję firstUppercase(), która przyjmie zdanie i zamieni pierwszą literę każdego
// słowa na wielką.

function firstUppercase(string) {
    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}

console.log(firstUppercase("zamiEni pierwszą literę każego słowa na wielką"));
console.log(firstUppercase("We're sorry, we couldn't find what you were looking for."));
