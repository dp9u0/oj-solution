/*
 * @lc app=leetcode id=1521 lang=javascript
 *
 * [1521] Find a Value of a Mysterious Function Closest to Target
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var closestToTarget = function(arr, target) {
    let ans = Infinity;
    let prev = new Set();

    for (let i = 0; i < arr.length; i++) {
        const cur = new Set([arr[i]]);
        for (const v of prev) cur.add(v & arr[i]);
        for (const v of cur) {
            const diff = Math.abs(v - target);
            if (diff < ans) ans = diff;
            if (ans === 0) return 0;
        }
        prev = cur;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(closestToTarget([9,12,3,7,15], 5));              // 2
console.log(closestToTarget([1000000,1000000,1000000], 1));  // 999999
console.log(closestToTarget([1,2,4,8,16], 0));               // 0
console.log(closestToTarget([5], 5));                         // 0
console.log(closestToTarget([10, 20], 15));                   // 5 (10&20=0, min is |10-15|=5)
