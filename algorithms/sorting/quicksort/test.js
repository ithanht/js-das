const quicksort = require("./index");

test("Sort an array of integers", () => {
  const testData = [9, 2, 6, 1, 4, 7, 2, 1];
  quicksort(testData, 0, testData.length - 1);
  expect(testData.join(",")).toBe("1,1,2,2,4,6,7,9");
});
