/*
 * @lc app=leetcode id=1442 lang=javascript
 *
 * [1442] Count Triplets That Can Form Two Arrays of Equal XOR
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    const countMap = new Map();
    const sumMap = new Map();
    countMap.set(0, 1);
    sumMap.set(0, 0);
    let xor = 0;
    let result = 0;
    for (let k = 0; k < arr.length; k++) {
        xor ^= arr[k];
        if (countMap.has(xor)) {
            result += countMap.get(xor) * k - sumMap.get(xor);
        }
        countMap.set(xor, (countMap.get(xor) || 0) + 1);
        sumMap.set(xor, (sumMap.get(xor) || 0) + k + 1);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countTriplets([2,3,1,6,7])); // 4
console.log(countTriplets([1,1,1,1,1])); // 10
