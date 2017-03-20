// Napisz funkcję isLeapYear(), która sprawdzi, czy podany rok jest rokiem przestępnym.
// Użyj zagnieżonych instrukcji if/else.
// Lata przestępne to takie, których numer dzieli się przez 4, ale nie dzieli się przez 100, chyba
// że dzieli się również przez 400.

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }

    if (year % 4 !== 0) {
        return false;
    }

    return year % 100 !== 0;

}
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(1996)); // true
console.log(isLeapYear(1995)); // false
