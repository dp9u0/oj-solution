/*
 * @lc app=leetcode id=1497 lang=javascript
 *
 * [1497] Check If Array Pairs Are Divisible by k
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const count = new Array(k).fill(0);
    for (const x of arr) {
        let r = ((x % k) + k) % k;
        count[r]++;
    }

    if (count[0] % 2 !== 0) return false;

    for (let r = 1; r <= Math.floor(k / 2); r++) {
        if (count[r] !== count[k - r]) return false;
    }

    return true;
};
// @lc code=end

// TEST:
console.log(canArrange([1,2,3,4,5,10,6,7,8,9], 5));  // true
console.log(canArrange([1,2,3,4,5,6], 7));             // true
console.log(canArrange([1,2,3,4,5,6], 10));            // false
