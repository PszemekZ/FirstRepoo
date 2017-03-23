/*Napisz funkcję withoutTax(amount), która zwróci kwotę wynagrodzenia po odjęciu
podatku dochodowego w wysokości 18 % .Wynik zaokrąglij do pełnych złotych.*/

const TAX_PERCENT = 18;

function withoutTax(amount) {
    return Math.round(Math.abs(amount / 100 * TAX_PERCENT - amount));
};
console.log(withoutTax(500));
console.log(withoutTax(2200));
console.log(withoutTax(13531));
