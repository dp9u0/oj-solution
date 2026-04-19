/*
 * @lc app=leetcode id=1481 lang=javascript
 *
 * [1481] Least Number of Unique Integers after K Removals
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const freq = new Map();
    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const counts = [...freq.values()].sort((a, b) => a - b);

    let removed = 0;
    for (const count of counts) {
        if (k >= count) {
            k -= count;
            removed++;
        } else {
            break;
        }
    }

    return counts.length - removed;
};
// @lc code=end

// TEST:
console.log(findLeastNumOfUniqueInts([5, 5, 4], 1)); // 1
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)); // 2
console.log(findLeastNumOfUniqueInts([1, 1, 1, 1], 2)); // 1
console.log(findLeastNumOfUniqueInts([1, 2, 3], 0)); // 3
