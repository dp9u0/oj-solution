/*
 * @lc app=leetcode id=1387 lang=javascript
 *
 * [1387] Sort Integers by The Power Value
 */

// @lc code=start
/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const memo = {};

    const getPower = (x) => {
        if (x === 1) return 0;
        if (memo[x] !== undefined) return memo[x];
        let steps = 0;
        let n = x;
        while (n !== 1 && memo[n] === undefined) {
            n = n % 2 === 0 ? n / 2 : 3 * n + 1;
            steps++;
        }
        memo[x] = steps + (memo[n] || 0);
        return memo[x];
    };

    const nums = [];
    for (let i = lo; i <= hi; i++) {
        nums.push(i);
    }

    nums.sort((a, b) => {
        const pa = getPower(a);
        const pb = getPower(b);
        return pa !== pb ? pa - pb : a - b;
    });

    return nums[k - 1];
};
// @lc code=end

// TEST:
console.log(getKth(12, 15, 2));  // 13
console.log(getKth(7, 11, 4));   // 7
console.log(getKth(1, 1, 1));    // 1
