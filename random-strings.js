// Napisz funkcję randomString(), która zwróci losowy łańcuch znaków o podanej długości.

function randomString(textLength) {
    var output = ""
    var charsList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < textLength; i++) {
        output += charsList.charAt(Math.floor(Math.random() * charsList.length));
    }
    return output;
}
console.log(randomString(7));
console.log(randomString(10));
console.log(randomString(15));
