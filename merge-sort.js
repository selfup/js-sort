'use strict'

const mergeSort = (x) => {
  if (x.length < 2) {
    return x
  }

  let m = Math.floor(x.length / 2)
  let left = x.slice(0, m)
  let right = x.slice(m)

  return sortedArrayMerge(mergeSort(left), mergeSort(right))
}

const sortedArrayMerge = (left, right) => {
  let mergedArray = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      mergedArray.push(left[indexLeft++])
    } else {
      mergedArray.push(right[indexRight++])
    }
  }

  return mergedArray
    .concat(left.slice(indexLeft))
    .concat(right.slice(indexRight))
}


console.log(mergeSort( [3, 2, 1, 23, 6, 98, 12, 42] ))
