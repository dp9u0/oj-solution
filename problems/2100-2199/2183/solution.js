/*
 * @lc app=leetcode id=2183 lang=javascript
 *
 * [2183] Count Array Pairs Divisible by K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    const divs = [];
    for (let d = 1; d * d <= k; d++) {
        if (k % d === 0) {
            divs.push(d);
            if (d !== k / d) divs.push(k / d);
        }
    }

    const cnt = new Map();
    let ans = 0;

    for (const num of nums) {
        let g = num, kk = k;
        while (kk) { [g, kk] = [kk, g % kk]; }
        const need = k / g;
        for (const d of divs) {
            if (d % need === 0) ans += (cnt.get(d) || 0);
        }
        cnt.set(g, (cnt.get(g) || 0) + 1);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(countPairs([1,2,3,4,5], 2)); // 7
console.log(countPairs([1,2,3,4], 5)); // 0
console.log(countPairs([1], 1)); // 0
console.log(countPairs([2,2], 2)); // 1
console.log(countPairs([6,6,6,6], 6)); // 6
