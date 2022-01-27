const mergeSort = require("../merge-sort");
const quickSort = require("../quick-sort");
const SortTester = require("./SortTester");

function quickSortHandler(array) {
	return quickSort(array, 0, array.length - 1);
}

describe("quick sort", () => {
	it("should work for simple cases", () => {
		SortTester.testSimpleCases(quickSortHandler);
	});
	it("should work for empty arrays", () => {
		SortTester.testEmptyArray(quickSortHandler);
	});
	it("should work for arrays with negative values", () => {
		SortTester.testNegatives(quickSortHandler);
	});
	it("should work for arrays that are already sorted", () => {
		SortTester.testSortedArray(quickSortHandler);
	});
	it("should work for arrays that have all the same value", () => {
		SortTester.testEqualArray(quickSortHandler);
	});
});
describe("merge sort", () => {
	it("should work for simple cases", () => {
		SortTester.testSimpleCases(mergeSort);
	});
	it("should work for empty arrays", () => {
		SortTester.testEmptyArray(mergeSort);
	});
	it("should work for arrays with negative values", () => {
		SortTester.testNegatives(mergeSort);
	});
	it("should work for arrays that are already sorted", () => {
		SortTester.testSortedArray(mergeSort);
	});
	it("should work for arrays that have all the same value", () => {
		SortTester.testEqualArray(mergeSort);
	});
});
