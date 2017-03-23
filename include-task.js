// 7. Napisz funkcję includes(a, b), która sprawdza, czy a zawiera się w b.

function includes(a, b) {
    return a.includes(b);
}
console.log(includes('Hello World', 'Hell')); //true
console.log(includes('Hello World', 'dupa')); //false
