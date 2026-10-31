/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    // 每次给 n-1 个元素 +1 等价于给剩下的 1 个元素 -1（相对视角），
    // 所以最少次数 = 所有元素降到初始最小值所需的减一总次数
    let min = nums[0];
    let moves = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        moves += nums[i] - min;
    }
    return moves;
};
// @lc code=end

// TEST:
console.log(minMoves([1, 2, 3]) === 3); // 单次操作使 n-1 个元素 +1
console.log(minMoves([1, 1, 1]) === 0); // 已经全部相等
console.log(minMoves([1]) === 0); // 单元素无需操作
console.log(minMoves([-1000000000, 1000000000]) === 2000000000); // 负数边界
console.log(minMoves([1, 10, 2, 9]) === 18); // 无序数组
console.log(minMoves([5, 5, 4, 4]) === 2); // 含重复最小值
