/*
 * @lc app=leetcode.cn id=666 lang=javascript
 *
 * [666] 路径总和 IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function(nums) {
    // key (d*8 + p) -> value
    const tree = new Map();
    for (const num of nums) {
        const d = Math.floor(num / 100);
        const p = Math.floor((num % 100) / 10);
        const v = num % 10;
        tree.set(d * 8 + p, v);
    }

    let total = 0;
    const dfs = (d, p, sum) => {
        sum += tree.get(d * 8 + p);
        const children = d + 1;
        const hasL = tree.has(children * 8 + 2 * p - 1);
        const hasR = tree.has(children * 8 + 2 * p);
        if (!hasL && !hasR) { // leaf
            total += sum;
            return;
        }
        if (hasL) dfs(children, 2 * p - 1, sum);
        if (hasR) dfs(children, 2 * p, sum);
    };
    dfs(1, 1, 0);
    return total;
};
// @lc code=end

// TEST:
console.log(pathSum([113, 215, 221])); // 12
console.log(pathSum([113, 221])); // 4
console.log(pathSum([111])); // 1
console.log(pathSum([113, 214, 222, 316, 327])); // 32 (5 + 13 + 14)
console.log(pathSum([113, 214])); // 7
