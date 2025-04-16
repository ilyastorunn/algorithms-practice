/**
 * Kabarcık sıralama algoritması implementasyonu
 * @param {Array} arr - Sıralanacak dizi
 * @returns {Array} - Sıralanmış dizi
 */
function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Elemanları yer değiştir
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
}

module.exports = bubbleSort; 