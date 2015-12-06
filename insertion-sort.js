'use strict'

const insertionSort = (x) => {
	for (let i = 1; i < x.length; i++) {
		for (let j = i; j > 0 && x[j] < x[j-1]; j--) {
			let temp = x[j];
			x[j]     = x[j-1]
			x[j-1]   = temp
		}
	}
	return x
}

console.log(insertionSort( [3, 2, 1] ))
