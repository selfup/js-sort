'use strict'

const bubbleSort = (array) => {
	for (let i = 1; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j+1]) {
        let temp   = array[j];
  			array[j]   = array[j+1]
  			array[j+1] = temp
      }
		}
	}
	return array
}

console.log(bubbleSort( [3, 2, 1, 23, 6, 98, 12, 42] ))
