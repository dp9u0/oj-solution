/*
 * @lc app=leetcode.cn id=4066 lang=javascript
 *
 * [4066] 至多一次替换后的最大相邻相等元素对数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualAdjacentPairs = function(nums) {
    const selunaviro = nums;
    let base = 0; // 原有相等邻接对数
    const cnt = new Map(); // 无序值对 -> 相邻出现次数
    for (let i = 1; i < selunaviro.length; i++) {
        const a = selunaviro[i - 1];
        const b = selunaviro[i];
        if (a === b) {
            base++;
        } else {
            const key = a < b ? `${a},${b}` : `${b},${a}`;
            cnt.set(key, (cnt.get(key) || 0) + 1);
        }
    }
    let best = 0;
    for (const c of cnt.values()) best = Math.max(best, c);
    return base + best;
};
// @lc code=end

// TEST:
console.log(maxEqualAdjacentPairs([1, 2, 3, 2])); // 2
console.log(maxEqualAdjacentPairs([1, 2, 1, 2, 1])); // 4
console.log(maxEqualAdjacentPairs([1, 1, 1])); // 2 (不操作)
console.log(maxEqualAdjacentPairs([1, 2])); // 1
console.log(maxEqualAdjacentPairs([5, 1, 5, 1, 5, 1, 5])); // 6
console.log(maxEqualAdjacentPairs([1, 2, 2, 3, 3, 3])); // 4 (base 3 + {1,2} 或 {2,3} 1 对)
console.log(maxEqualAdjacentPairs([1, 3, 2, 4, 2, 3, 1])); // 2 ({2,3} 与 {2,4} 各出现 2 次)
