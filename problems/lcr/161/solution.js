/*
 * @lc app=leetcode.cn id=LCR 161 lang=javascript
 *
 * [LCR 161] 连续天数的最高销售额
 */

// @lc code=start
/**
 * @param {number[]} sales
 * @return {number}
 */
var maxSales = function(sales) {
    let maxSum = -Infinity;
    let currentSum = -Infinity;
    for (const num of sales) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};
// @lc code=end

// TEST:
function test() {
    const assert = require('assert');

    assert.strictEqual(maxSales([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6); // 官方示例1
    assert.strictEqual(maxSales([5, 4, -1, 7, 8]), 23); // 官方示例2
    assert.strictEqual(maxSales([1]), 1); // 单元素
    assert.strictEqual(maxSales([-1]), -1); // 单负数
    assert.strictEqual(maxSales([-2, -3, -1, -5]), -1); // 全负数，取最大值
    assert.strictEqual(maxSales([0, 0, 0]), 0); // 全零
    assert.strictEqual(maxSales([100, -1, 100]), 199); // 跨负数的正数段

    console.log('All tests passed!');
}

test();
