// Quick Sort

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  if (array.length >= 1) {

    let left = [];
    let right = [];
    let newArray = [];
    let pivot = array.pop();

    for (let i = 0; i < array.length; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      }
      if (array[i] >= pivot) {
        right.push(array[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}

console.log(quickSort([3, 0, 2, 5, -1, 4, 1]));
console.log(quickSort([5, 6, 1, 3, 4, 2]));
