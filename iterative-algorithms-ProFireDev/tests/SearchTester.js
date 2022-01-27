const easyBinarySearchable = [
	1, 3, 6, 8, 12, 19, 20, 21, 25, 30, 31, 33, 38, 39, 45,
];
const evenLength = [1, 4, 8, 15, 28, 40, 45, 46];

class SearchTester {
	static testOdd(searchFunction) {
		easyBinarySearchable.forEach((el, i) => {
			expect(searchFunction([...easyBinarySearchable], el).index).toEqual(i);
		});
	}

	static testEven(searchFunction) {
		evenLength.forEach((el, i) => {
			expect(searchFunction([...evenLength], el).index).toEqual(i);
		});
	}

	static testSingle(searchFunction) {
		expect(searchFunction([4], 4).index).toEqual(0);
	}
}

module.exports = SearchTester;
