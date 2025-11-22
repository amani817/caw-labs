const { first, last, concatenateStrings, chunk } = require('./arrayFunctions');

// Tests for first()
test("first returns first element when n is null", () => {
    expect(first([10, 20, 30])).toBe(10);
});

test("first returns first n elements", () => {
    expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
});

test("first returns [] for n <= 0", () => {
    expect(first([1, 2, 3], 0)).toEqual([]);
});

// Tests for last()
test("last returns last element when n is null", () => {
    expect(last([10, 20, 30])).toBe(30);
});

test("last returns last n elements", () => {
    expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
});

// Tests for concatStrings()
test('concatenateStrings() joins all elements of an array into a string', () => {
        const colors = ["Red", "Green", "White", "Black"];
        expect(concatenateStrings(colors)).toEqual("Red, Green, White, Black");
    });
// Tests for chunk()
test("chunk splits array into subarrays of size", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});
