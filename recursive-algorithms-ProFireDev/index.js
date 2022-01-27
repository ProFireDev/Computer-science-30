const mergeSort = require("./merge-sort");
const quickSort = require("./quick-sort");
const binarySearchRec = require("./recursive-binary-search");

const sortTestArraySize = 10;
const sortTestArray = Array.from({ length: sortTestArraySize }, () =>
	Math.floor(Math.random() * sortTestArraySize)
);

console.log(`Sort Test Array: \n${sortTestArray}\n`);

let mergeResult = mergeSort([...sortTestArray]);
console.log(`Merge Sort: \n${mergeResult}\n`);

let quickResult = quickSort([...sortTestArray], 0, sortTestArray.length - 1);
console.log(`Quick Sort: \n${quickResult}\n`);

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

console.log("Recursive Binary Search:");
let linearSearchResult = binarySearchRec(
	[...searchTestArray],
	searchTestTerm,
	0,
	searchTestArray.length - 1
);
console.log(`Result: ${linearSearchResults}\n`);
