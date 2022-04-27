function bubbleSort(array) {
	for (let last = array.length-1; last >= 1; last--) {
		for (let index = 0; index<last; index++) {
			if (array[index] > array[index+1]) {
				[array[index], array[index+1]] = [array[index+1], array[index]];
			}
		}
	}
	return array;
}