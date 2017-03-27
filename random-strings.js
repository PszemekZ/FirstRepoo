// Napisz funkcję randomString(), która zwróci losowy łańcuch znaków o podanej długości.

function randomString(textLength) {
    var text = ""
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < textLength; i++) {
        text += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return text;
}
console.log(randomString(7));
console.log(randomString(10));
console.log(randomString(15));
