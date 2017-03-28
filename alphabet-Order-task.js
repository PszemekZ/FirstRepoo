// Napisz funkcję alphabetOrder(), która zwróci podany łańcuch znaków z literami
// uporządkowanymi według alfabetu („wyraz” - „arwyz”). Nie przejmuj się na razie polskimi
// znakami :)

function alphabetOrder(elements) {
    return newWord = elements.split("").sort().join("");

}

console.log(alphabetOrder("dupa")); // adpd
console.log(alphabetOrder("placki ziemniaczane")); // aaacceeiiiklmnnpzz
