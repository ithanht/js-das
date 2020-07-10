'use strict';

function mergeSortExcute(array, helperArray, low, high) {
  if (low >= high) return;

  const middle = Math.floor((low + high)/2);

  mergeSortExcute(array, helperArray, low, middle);
  mergeSortExcute(array, helperArray, middle + 1, high);
  merge(array, helperArray, low, middle, high);
}

function merge(array, helperArray, low, middle, high) {
  for (let i = low; i <= high; i++) {
    helperArray[i] = array[i];
  }

  let current = low;
  let leftIndex = low;
  let rightIndex = middle + 1;

  while (leftIndex <= middle && rightIndex <= high) {
    if (helperArray[leftIndex] <= helperArray[rightIndex]) {
      array[current] = helperArray[leftIndex];
      leftIndex++;
    } else {
      array[current] = helperArray[rightIndex];
      rightIndex++;
    }
    current++
  }

  const remaining = middle - leftIndex + 1;
  for (let i = 0; i < remaining; i++) {
    array[current+i] = helperArray[leftIndex+i];
  }
}

function mergeSort(array) {
  const helperArray = [];
  mergeSortExcute(array, helperArray, 0, array.length - 1)
}

module.exports = mergeSort;
