function quickSort(array, start, end) {
	//If the section is bigger than 1 element,
	//partition it (using the function below).
	//
	//Unless the pivot ended up at start or end of the section,
	//quickSort the portion lower than the pivot and quicksort the
	//portion higher than the pivot
}

function partition(array, start, end) {
	//choose an element with the "start" and "end"
	//boundaries to be the "pivot" (usually the middle
	//works best)
	//
	//Move any elements (with the start and end bounds)
	//less than the pivot to the left of it.
	//Move elements larger than the pivot to the right of it.
	//
	//Make sure to return the index of the pivot
}

module.exports = quickSort;
