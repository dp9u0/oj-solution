/*
 * @lc app=leetcode id=1539 lang=javascript
 *
 * [1539] Kth Missing Positive Number
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const missing = arr[mid] - mid - 1;
        if (missing < k) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    // lo is the first index where missing >= k, answer is k + lo
    return k + lo;
};
// @lc code=end

// TEST:
console.log(findKthPositive([2,3,4,7,11], 5)); // 9
console.log(findKthPositive([1,2,3,4], 2));     // 6
console.log(findKthPositive([2], 1));           // 1
