//Napisz funkcję truncate(), która skróci podany łańcuch do podanej liczby znaków.


function truncate() {
    var length = 10;
    var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return array.substring(0, length);
}
console.log(truncate());
