const insertionSort = require("./insertion-sort");
const selectionSort = require("./selection-sort");
const bubbleSort = require("./bubble-sort");
const linearSearch = require("./linear-search");
const binarySearch = require("./binary-search");

const sortTestArraySize = 10;
const sortTestArray = Array.from({ length: sortTestArraySize }, () =>
	Math.floor(Math.random() * sortTestArraySize)
);

console.log(`Sort Test Array: \n${sortTestArray}\n`);

let insertionResult = insertionSort([...sortTestArray]);
console.log(
	`Insertion Sort: \n${insertionResult.result}\nLoops: ${insertionResult.loops}\n`
);

let selectionResult = selectionSort([...sortTestArray]);
console.log(
	`Selection Sort: \n${selectionResult.result}\nLoops: ${selectionResult.loops}\n`
);

let bubbleResult = bubbleSort([...sortTestArray]);
console.log(
	`Bubble Sort: \n${bubbleResult.result}\nLoops: ${bubbleResult.loops}\n`
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

const searchTestArraySize = 10;
const searchTestArray = Array.from(
	{ length: searchTestArraySize },
	(v, i) => i * 2 + 1
);
const searchTestAnswer = Math.floor(Math.random() * searchTestArraySize);
const searchTestTerm = searchTestArray[searchTestAnswer];
console.log(`Search Test Array: \n${searchTestArray}`);
console.log(`Searching for ${searchTestTerm}`);
console.log(`Result should be ${searchTestAnswer}\n`);

console.log("Linear Search:");
let linearSearchResults = linearSearch([...searchTestArray], searchTestTerm);
console.log(
	`Result: ${linearSearchResults.index} Reads: ${linearSearchResults.reads}\n`
);

console.log("Binary Search:");
let binarySearchResults = binarySearch([...searchTestArray], searchTestTerm);
console.log(
	`Result: ${binarySearchResults.index} Reads: ${binarySearchResults.reads}\n`
);
