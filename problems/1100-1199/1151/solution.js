/*
 * @lc app=leetcode.cn id=1151 lang=javascript
 *
 * [1151] 最少交换次数来组合所有的 1
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    const total = data.reduce((a, b) => a + b, 0);
    let zeros = 0;
    for (let i = 0; i < total; i++) if (data[i] === 0) zeros++;
    let best = zeros;
    for (let i = total; i < data.length; i++) {
        if (data[i] === 0) zeros++;
        if (data[i - total] === 0) zeros--;
        if (zeros < best) best = zeros;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(minSwaps([1,0,1,0,1])); // 1
console.log(minSwaps([0,0,0,1,0])); // 0
console.log(minSwaps([1,0,1,0,1,0,0,1,1,0,1])); // 3
console.log(minSwaps([1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1])); // 8
console.log(minSwaps([0,0,0])); // 0
console.log(minSwaps([1])); // 0
