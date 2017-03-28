// Napisz funkcję alphabetOrder(), która zwróci podany łańcuch znaków z literami
// uporządkowanymi według alfabetu („wyraz” - „arwyz”). Nie przejmuj się na razie polskimi
// znakami :)

function alphabetOrder(word) {
    const newWord = word.split("").sort().join("");
    return newWord;
}

console.log(alphabetOrder("dupa")); //adpd
console.log(alphabetOrder("placki ziemniaczane")); //aaacceeiiiklmnnpzz
