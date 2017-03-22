/*Napisz funkcję withoutTax(amount), która zwróci kwotę wynagrodzenia po odjęciu
podatku dochodowego w wysokości 18 % .Wynik zaokrąglij do pełnych złotych.*/


function withoutTax(amount) {
    return Math.floor(amount * 0.82);
};
console.log(withoutTax(500));
console.log(withoutTax(1545));
console.log(withoutTax(13531));
