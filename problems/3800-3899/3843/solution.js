/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function(nums) {
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    const freqCount = new Map();
    for (const count of freq.values()) {
        freqCount.set(count, (freqCount.get(count) || 0) + 1);
    }
    for (const num of nums) {
        if (freqCount.get(freq.get(num)) === 1) {
            return num;
        }
    }
    return -1;
};

// TEST:
console.log(firstUniqueFreq([20, 10, 30, 30])); // 30
console.log(firstUniqueFreq([20, 20, 10, 30, 30, 30])); // 20
console.log(firstUniqueFreq([10, 10, 20, 20])); // -1
console.log(firstUniqueFreq([1])); // 1
