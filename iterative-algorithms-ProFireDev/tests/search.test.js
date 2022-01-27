const linearSearch = require("../linear-search");
const binarySearch = require("../binary-search");
const SearchTester = require("./SearchTester");

describe("linear search", () => {
	it("should work for arrays with odd lengths", () => {
		SearchTester.testOdd(linearSearch);
	});
	it("should work for arrays with even lengths", () => {
		SearchTester.testEven(linearSearch);
	});
	it("should work for arrays only 1 element", () => {
		SearchTester.testSingle(linearSearch);
	});
});
describe("binary search", () => {
	it("should work for arrays with odd lengths", () => {
		SearchTester.testOdd(binarySearch);
	});
	it("should work for arrays with even lengths", () => {
		SearchTester.testEven(binarySearch);
	});
	it("should work for arrays only 1 element", () => {
		SearchTester.testSingle(binarySearch);
	});
});
