const binarySearchRec = require("../recursive-binary-search");
const SearchTester = require("./SearchTester");

function binarySearchRecHandler(array, searchTerm) {
	return binarySearchRec(array, searchTerm, 0, array.length - 1);
}

describe("recursive binary search", () => {
	it("should work for arrays with odd lengths", () => {
		SearchTester.testOdd(binarySearchRecHandler);
	});
	it("should work for arrays with even lengths", () => {
		SearchTester.testEven(binarySearchRecHandler);
	});
	it("should work for arrays only 1 element", () => {
		SearchTester.testSingle(binarySearchRecHandler);
	});
});
