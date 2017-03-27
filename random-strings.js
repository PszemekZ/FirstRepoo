// Napisz funkcję randomString(), która zwróci losowy łańcuch znaków o podanej długości.

var textLength;

function randomString(textLength) {
    var text = ""
    var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < textLength; i++) {
        text += array.charAt(Math.floor(Math.random() * array.length));
    }
    return text;
}
console.log(randomString(7));
console.log(randomString(10));
console.log(randomString(15));
