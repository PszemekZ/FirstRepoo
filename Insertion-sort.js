// Insertion sort

function inserionSort(array) {
  for (let i = 1; i < array.length; ++i) {
    const temp = array[i];
    let j = i - 1;
    for (; j >= 0 && array[j] > temp; --j) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
}

console.log(inserionSort([7, 4, 5, 2, 9, 1])); // 1, 2, 4, 5, 7, 9
console.log(inserionSort([5, 2, 6, 1, 4, 3])); // 1, 2, 3, 4, 5, 6
