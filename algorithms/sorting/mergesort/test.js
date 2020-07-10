const mergeSort = require('./index');

test('Sort an array of integers', () => {
  const testData = [9,2,6,1,4,7,2,1];
  mergeSort(testData);
  expect(testData.join(',')).toBe('1,1,2,2,4,6,7,9');
});
