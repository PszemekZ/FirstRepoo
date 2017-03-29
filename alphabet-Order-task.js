// Napisz funkcję alphabetOrder(), która zwróci podany łańcuch znaków z literami
// uporządkowanymi według alfabetu („wyraz” - „arwyz”). Nie przejmuj się na razie polskimi
// znakami :)

function alphabetOrder(string) {
    return string.split("").sort().join("");

}

console.log(alphabetOrder("dupa")); // adpu
console.log(alphabetOrder("placki ziemniaczane")); //  aaacceeiiiklmnnpzz
