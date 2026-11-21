/*
 * @lc app=leetcode.cn id=2214 lang=javascript
 *
 * [2214] 通关游戏所需的最低生命值
 */

// @lc code=start
/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    let sum = 0, maxD = 0;
    for (const d of damage) {
        sum += d;
        if (d > maxD) maxD = d;
    }
    return sum - Math.min(maxD, armor) + 1;
};
// @lc code=end

// TEST:
console.log(minimumHealth([2,7,4,3], 4)); // 13
console.log(minimumHealth([2,5,3,4], 7)); // 10
console.log(minimumHealth([3,3,3], 0)); // 10
console.log(minimumHealth([1], 5)); // 1 (armor blocks all)
console.log(minimumHealth([0,0], 3)); // 1
