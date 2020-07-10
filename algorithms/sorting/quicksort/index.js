"use strict";

function quicksort(array, left, right) {
  const index = partition(array, left, right);

  if (index - 1 > left) {
    quicksort(array, left, index - 1);
  }

  if (index < right) {
    quicksort(array, index, right);
  }
}

function partition(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];

  // include case of equal indecies in a favor of infinite stack call
  while (left <= right) {
    // find element on left should be on right
    while (array[left] < pivot) left++;
    // find element on right should be on left
    while (array[right] > pivot) right--;

    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  return left;
}

module.exports = quicksort;
