/*
 * @lc app=leetcode.cn id=面试题 16.11 lang=javascript
 *
 * [面试题 16.11] 跳水板
 */

// @lc code=start
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    if (k === 0) return [];
    // 两种板等长时只有一种长度，不能输出 k+1 个重复值
    if (shorter === longer) return [shorter * k];
    const base = shorter * k;
    const diff = longer - shorter;
    const res = new Array(k + 1);
    for (let i = 0; i <= k; i++) {
        // i 为 longer 的数量，长度随 i 严格递增，天然有序
        res[i] = base + i * diff;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(divingBoard(1, 2, 3)) === '[3,4,5,6]');
console.log(JSON.stringify(divingBoard(1, 1, 0)) === '[]');
console.log(JSON.stringify(divingBoard(3, 5, 0)) === '[]');
console.log(JSON.stringify(divingBoard(1, 1, 5)) === '[5]');
console.log(JSON.stringify(divingBoard(2, 3, 1)) === '[2,3]');
console.log(JSON.stringify(divingBoard(1, 4, 4)) === '[4,7,10,13,16]');
