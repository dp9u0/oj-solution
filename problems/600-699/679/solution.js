/*
 * @lc app=leetcode id=679 lang=javascript
 *
 * [679] 24 Game
 */

// @lc code=start
/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
  const solve = (nums) => {
    if (nums.length === 1) {
      return Math.abs(nums[0] - 24) < 1e-6;
    }

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i === j) continue;
        const rest = nums.filter((_, k) => k !== i && k !== j);
        const a = nums[i], b = nums[j];

        const results = [a + b, a - b, a * b];
        if (Math.abs(b) > 1e-6) results.push(a / b);

        for (const r of results) {
          if (solve([...rest, r])) return true;
        }
      }
    }
    return false;
  };

  return solve(cards);
};
// @lc code=end

// TEST:
console.log(judgePoint24([4,1,8,7])); // true
console.log(judgePoint24([1,2,1,2])); // false
console.log(judgePoint24([1,1,1,1])); // false
console.log(judgePoint24([3,3,8,8])); // true (8/(3-8/3))
