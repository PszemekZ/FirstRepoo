// Napisz funkcję commonFactor(a, b), która iteracyjnie zwróci największy wspólny dzielnik
// dwóch liczb na podstawie niezoptymalizowanego Algorytmu Euklidesa.

function commonFactor(a, b) {
  while (a != b) {
    while (a < b) {
      b = b - a;
    }
    while (a > b) {
      a = a - b;
    }
  }
  return a;

}

console.log(commonFactor(6, 24)); // 6
console.log(commonFactor(1122, 867)); // 51
console.log(commonFactor(612, 536)); // 4
