function selectionSort(array) {
	let loops = 0;
	//sort the array here, you must call "loops++"
	//inside any loops (including nested loops)
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	return { result: array, loops: loops };
}

module.exports = selectionSort;
