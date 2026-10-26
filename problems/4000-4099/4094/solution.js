/*
 * @lc app=leetcode.cn id=4094 lang=javascript
 *
 * [4094] 统计频次阶梯子数组的数目 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countStaircase = function(nums) {
    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const pos = new Map(); // 值 -> 首次出现位次(1-based)
        const cnt = new Map();
        let cntBad = 0; // 计数已超过自身位次的不同值个数(只增)
        for (let j = i; j < n; j++) {
            const x = nums[j];
            if (!pos.has(x)) {
                pos.set(x, pos.size + 1);
                cnt.set(x, 1);
            } else {
                const t = cnt.get(x) + 1;
                cnt.set(x, t);
                if (t === pos.get(x) + 1) cntBad++; // 越过自身位次
            }
            if (cntBad === 0) {
                const len = j - i + 1;
                if (len === (pos.size * (pos.size + 1)) / 2) ans++;
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countStaircase([5,8,8,2,2,2]) === 9);
console.log(countStaircase([6,6,9,9]) === 5);
console.log(countStaircase([2,3,4,4,3,4]) === 8);
console.log(countStaircase([1]) === 1);
console.log(countStaircase([1,1]) === 2);
