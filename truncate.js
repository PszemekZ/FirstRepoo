//Napisz funkcję truncate(), która skróci podany łańcuch do podanej liczby znaków.

function truncate(string, length) {
    return string.substring(0, length);
}
console.log(truncate("prostezadaniepl", 6));
