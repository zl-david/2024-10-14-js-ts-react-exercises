const { every, flatten, loop } = require("./03-declarative");

describe("flatten", () => {
  it("should flatten an array of arrays into a single array", () => {
    const nestedArrays = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
    const result = flatten(nestedArrays);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should return an empty array if input is an empty array", () => {
    const nestedArrays = [];
    const result = flatten(nestedArrays);
    expect(result).toEqual([]);
  });

  it("should handle arrays with one inner array correctly", () => {
    const nestedArrays = [[1, 2, 3]];
    const result = flatten(nestedArrays);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle an array of empty arrays", () => {
    const nestedArrays = [[], [], []];
    const result = flatten(nestedArrays);
    expect(result).toEqual([]);
  });
});

describe("loop", () => {
  it("should call body function with correct values and stop when test function fails", () => {
    const mockBody = jest.fn(); // Mock body function to track calls

    const initialValue = 3;
    const testFn = (n) => n > 0;
    const updateFn = (n) => n - 1;
    const bodyFn = mockBody;

    loop(initialValue, testFn, updateFn, bodyFn);

    expect(mockBody).toHaveBeenCalledTimes(3);
    expect(mockBody).toHaveBeenNthCalledWith(1, 3);
    expect(mockBody).toHaveBeenNthCalledWith(2, 2);
    expect(mockBody).toHaveBeenNthCalledWith(3, 1);
  });

  it("should stop immediately if test function returns false initially", () => {
    const mockBody = jest.fn();

    const initialValue = 0;
    const testFn = (n) => n > 0;
    const updateFn = jest.fn();
    const bodyFn = mockBody;

    loop(initialValue, testFn, updateFn, bodyFn);

    expect(mockBody).not.toHaveBeenCalled();
    expect(updateFn).not.toHaveBeenCalled();
  });
});

describe("every", () => {
  it("should return true if all items match the condition", () => {
    expect(every([1, 3, 5], (n) => n < 10)).toBe(true);
  });

  it("should return false if only some items match the condition", () => {
    expect(every([2, 4, 16], (n) => n < 10)).toBe(false);
  });

  it("should return true when the array is empty", () => {
    expect(every([], (n) => n < 10)).toBe(true);
  });
});
