// 4. Napisz funkcję circleArea(diameter), która obliczy pole koła dla podanej średnicy. Użyj potęgowania.

function circleArea(diameter) {
    return Math.PI * Math.pow(diameter / 2, 2);
}
console.log(circleArea(2));
console.log(circleArea(3));
console.log(circleArea(4));
