// 7. Napisz funkcję includes(a, b), która sprawdza, czy a zawiera się w b.

var a = [1, 2, 3];

function includes(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return true;
        }
    }
    return false;
}
console.log(includes(a, 2)); //true
console.log(includes(a, 5)); //false
