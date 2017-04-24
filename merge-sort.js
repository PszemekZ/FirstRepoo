// Marge sort

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift())
  }

  return result.concat(left.length ? left : right);
}

console.log(mergeSort([1, 2, 9, 3, 2, 5, 14, 0])); // 0, 1, 2, 2, 3, 5, 9, 14
console.log(quickSort([5, 6, 1, 3, 4, 2])); // 1, 2, 3, 4, 5, 6
