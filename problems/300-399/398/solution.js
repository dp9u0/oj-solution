/*
 * @lc app=leetcode id=398 lang=javascript
 *
 * [398] Random Pick Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!this.map.has(nums[i])) this.map.set(nums[i], []);
        this.map.get(nums[i]).push(i);
    }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indices = this.map.get(target);
    return indices[Math.floor(Math.random() * indices.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

// TEST:
const sol = new Solution([1, 2, 3, 3, 3]);
console.log([2, 3, 4].includes(sol.pick(3)));
console.log(sol.pick(1) === 0);
console.log([2, 3, 4].includes(sol.pick(3)));
console.log(sol.pick(2) === 1);

const sol2 = new Solution([1]);
console.log(sol2.pick(1) === 0);

const sol3 = new Solution([1, 1, 1]);
console.log([0, 1, 2].includes(sol3.pick(1)));
