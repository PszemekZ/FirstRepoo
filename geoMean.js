// Napisz funkcję geoMean(), która zwróci średnią geometryczną podanej tablicy.

function geoMean(array) {
    let multiples = array[0];

    for (let i = 1; i < array.length; i++) {
        multiples = multiples * array[i];
    }

    return Math.pow(multiples, 1 / array.length);
}

console.log(geoMean([3, 12])); // 6
console.log(geoMean([2, 6, 8, 10])); // 5,56
console.log(geoMean([3, 4, 5, 6, 7, 8])); // 5,21
