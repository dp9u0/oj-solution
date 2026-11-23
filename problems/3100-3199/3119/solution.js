/*
 * @lc app=leetcode.cn id=3119 lang=javascript
 *
 * [3119] 最大数量的可修复坑洼
 */

// @lc code=start
/**
 * @param {string} road
 * @param {number} budget
 * @return {number}
 */
var maxPotholes = function(road, budget) {
    const blocks = [];
    let run = 0;
    for (const ch of road) {
        if (ch === 'x') run++;
        else if (run > 0) { blocks.push(run); run = 0; }
    }
    if (run > 0) blocks.push(run);
    blocks.sort((a, b) => b - a);
    let ans = 0;
    let left = budget;
    for (const L of blocks) {
        if (left >= L + 1) {
            ans += L;
            left -= L + 1;
        } else {
            ans += Math.max(0, left - 1);
            left = 0;
            break;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxPotholes("..", 5)); // 0
console.log(maxPotholes("..xxxxx", 4)); // 3
console.log(maxPotholes("x.x.xxx...x", 14)); // 6
console.log(maxPotholes("xxxx", 3)); // 2
console.log(maxPotholes("x.x.x", 1)); // 0
