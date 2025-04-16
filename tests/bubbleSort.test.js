const bubbleSort = require('../src/algorithms/bubbleSort');

describe('Kabarcık Sıralama Algoritması', () => {
    test('Karışık bir diziyi sıralamalı', () => {
        const arr = [64, 34, 25, 12, 22, 11, 90];
        expect(bubbleSort([...arr])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });

    test('Boş dizi için çalışmalı', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    test('Tek elemanlı dizi için çalışmalı', () => {
        expect(bubbleSort([1])).toEqual([1]);
    });

    test('Zaten sıralı dizi için çalışmalı', () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
}); 