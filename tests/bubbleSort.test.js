const bubbleSort = require('../src/algorithms/bubbleSort');

describe('Bubble Sort Algorithm', () => {
    test('should sort an unsorted array', () => {
        const arr = [64, 34, 25, 12, 22, 11, 90];
        expect(bubbleSort([...arr])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });

    test('should handle empty array', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    test('should handle array with single element', () => {
        expect(bubbleSort([1])).toEqual([1]);
    });

    test('should handle already sorted array', () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
}); 