/*
 * @lc app=leetcode.cn id=1196 lang=javascript
 *
 * [1196] 最多可以买到的苹果数量
 */

// @lc code=start
/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    weight.sort((a, b) => a - b);
    let count = 0, sum = 0;
    for (const w of weight) {
        if (sum + w > 5000) break;
        sum += w;
        count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxNumberOfApples([100, 200, 150, 1000])); // 4
console.log(maxNumberOfApples([900, 950, 800, 1000, 700, 800])); // 5
console.log(maxNumberOfApples([5000])); // 1
console.log(maxNumberOfApples([5001])); // 0
console.log(maxNumberOfApples([1, 2, 3, 4, 5])); // 5
