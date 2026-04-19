/*
 * @lc app=leetcode id=2122 lang=javascript
 *
 * [2122] Recover the Original Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var recoverArray = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let j = 1; j < n; j++) {
        const diff = nums[j] - nums[0];
        if (diff === 0 || diff % 2 !== 0) continue;
        const k = diff / 2;

        const freq = new Map();
        for (const x of nums) freq.set(x, (freq.get(x) || 0) + 1);

        const arr = [];
        let valid = true;

        for (const x of nums) {
            const cnt = freq.get(x);
            if (!cnt) continue;
            const y = x + 2 * k;
            const cntY = freq.get(y);
            if (!cntY || cntY < cnt) { valid = false; break; }
            freq.set(x, 0);
            freq.set(y, cntY - cnt);
            for (let t = 0; t < cnt; t++) arr.push(x + k);
        }

        if (valid) return arr;
    }

    return [];
};
// @lc code=end

// TEST:
const r1 = recoverArray([2, 10, 6, 4, 8, 12]);
console.log(r1); // [3,7,11] or [5,7,9]
console.log(recoverArray([1, 1, 3, 3])); // [2,2]
console.log(recoverArray([5, 435])); // [220]
