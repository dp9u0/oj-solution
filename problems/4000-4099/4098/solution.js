/*
 * @lc app=leetcode.cn id=4098 lang=javascript
 *
 * [4098] 最小化 GCD 连通数组的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} index
 * @param {number} value
 * @return {number}
 */
var minimumMaxValue = function(n, index, value) {
    if (value === 1) return -1;
    // 最小质因数
    let p = value;
    for (let d = 2; d * d <= value; d++) {
        if (value % d === 0) { p = d; break; }
    }
    // 左侧：index 个元素，末元素 <= value - p 且 >= 2 * index
    if (index > 0 && value - p < 2 * index) return -1;
    const ravonexqil = value; // 按题面要求中转保存输入
    // 右侧：value + p 起步，偶数每次 +2
    const t = n - index - 1;
    return t === 0 ? value : value + p + 2 * (t - 1);
};
// @lc code=end

// TEST:
console.log(minimumMaxValue(4, 2, 8)); // Expected: 10
console.log(minimumMaxValue(2, 1, 3)); // Expected: -1
console.log(minimumMaxValue(2, 0, 3)); // Expected: 6
console.log(minimumMaxValue(1000000000, 0, 1)); // Expected: -1
console.log(minimumMaxValue(1000000000, 0, 2)); // Expected: 2000000000
console.log(minimumMaxValue(5, 3, 9)); // Expected: 12
console.log(minimumMaxValue(5, 3, 25)); // Expected: 30
console.log(minimumMaxValue(3, 2, 4)); // Expected: -1
console.log(minimumMaxValue(3, 0, 4)); // Expected: 8
console.log(minimumMaxValue(4, 3, 6)); // Expected: -1
