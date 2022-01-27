const insertionSort = require("../insertion-sort");
const selectionSort = require("../selection-sort");
const bubbleSort = require("../bubble-sort");
const SortTester = require("./SortTester");

describe("insertion sort", () => {
	it("should work for simple cases", () => {
		SortTester.testSimpleCases(insertionSort);
	});
	it("should work for empty arrays", () => {
		SortTester.testEmptyArray(insertionSort);
	});
	it("should work for arrays with negative values", () => {
		SortTester.testNegatives(insertionSort);
	});
	it("should work for arrays that are already sorted", () => {
		SortTester.testSortedArray(insertionSort);
	});
	it("should work for arrays that have all the same value", () => {
		SortTester.testEqualArray(insertionSort);
	});
});
describe("selection sort", () => {
	it("should work for simple cases", () => {
		SortTester.testSimpleCases(selectionSort);
	});
	it("should work for empty arrays", () => {
		SortTester.testEmptyArray(selectionSort);
	});
	it("should work for arrays with negative values", () => {
		SortTester.testNegatives(selectionSort);
	});
	it("should work for arrays that are already sorted", () => {
		SortTester.testSortedArray(selectionSort);
	});
	it("should work for arrays that have all the same value", () => {
		SortTester.testEqualArray(selectionSort);
	});
});
describe("bubble sort", () => {
	it("should work for simple cases", () => {
		SortTester.testSimpleCases(bubbleSort);
	});
	it("should work for empty arrays", () => {
		SortTester.testEmptyArray(bubbleSort);
	});
	it("should work for arrays with negative values", () => {
		SortTester.testNegatives(bubbleSort);
	});
	it("should work for arrays that are already sorted", () => {
		SortTester.testSortedArray(bubbleSort);
	});
	it("should work for arrays that have all the same value", () => {
		SortTester.testEqualArray(bubbleSort);
	});
});
