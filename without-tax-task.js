/*Napisz funkcję withoutTax(amount), która zwróci kwotę wynagrodzenia po odjęciu
podatku dochodowego w wysokości 18 % .Wynik zaokrąglij do pełnych złotych.*/

const TAX_PERCENT = 18;

function withoutTax(amount) {
    return Math.round(amount * (1 - TAX_PERCENT / 100));
}
console.log(withoutTax(500));
console.log(withoutTax(2200));
console.log(withoutTax(13531));
