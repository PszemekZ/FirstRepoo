// Napisz funkcję randomString(), która zwróci losowy łańcuch znaków o podanej długości.

function randomString() {
    var textLength = 7;
    var text = "";
    var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < textLength; i++) {
        text += array.charAt(Math.floor(Math.random() * array.length));
    }
    return text;
}
console.log(randomString());
console.log(randomString());
console.log(randomString());
