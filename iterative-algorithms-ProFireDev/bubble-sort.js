function bubbleSort(array) {
	let loops = 0;
	//sort the array here, you must call "loops++"
	//inside any loops (including nested loops)
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

	return { result: array, loops: loops };
}

module.exports = bubbleSort;
