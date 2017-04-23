//   Insertion sort

function inserionSort(array) {
    array.forEach(function(element, index) {
        if (index === 0) {
            return;
        }

        let i = index - 1;

        for (; i >= 0 && array[i] > element; i--) {
            array[i + 1] = array[i];
        }

        array[i + 1] = element;
    });

    return array;
}

console.log(inserionSort([7, 4, 5, 2, 9, 1])); // 1, 2, 4, 5, 7, 9
console.log(inserionSort([5, 2, 6, 1, 4, 3])); // 1, 2, 3, 4, 5, 6
