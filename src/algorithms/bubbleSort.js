/**
 * Bubble Sort Algorithm Implementation
 * @param {Array} arr - Array to be sorted
 * @returns {Array} - Sorted array
 */
function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
}

module.exports = bubbleSort; 