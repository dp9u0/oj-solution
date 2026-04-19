/*
 * @lc app=leetcode id=2449 lang=javascript
 *
 * [2449] Minimum Number of Operations to Make Arrays Similar
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) {
    const n = nums.length;
    const numsOdd = [], numsEven = [];
    const targetOdd = [], targetEven = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) numsEven.push(nums[i]);
        else numsOdd.push(nums[i]);

        if (target[i] % 2 === 0) targetEven.push(target[i]);
        else targetOdd.push(target[i]);
    }

    numsOdd.sort((a, b) => a - b);
    numsEven.sort((a, b) => a - b);
    targetOdd.sort((a, b) => a - b);
    targetEven.sort((a, b) => a - b);

    let ops = 0;
    for (let i = 0; i < numsOdd.length; i++) {
        if (numsOdd[i] < targetOdd[i]) {
            ops += (targetOdd[i] - numsOdd[i]) / 2;
        }
    }
    for (let i = 0; i < numsEven.length; i++) {
        if (numsEven[i] < targetEven[i]) {
            ops += (targetEven[i] - numsEven[i]) / 2;
        }
    }

    return ops;
};
// @lc code=end

// TEST:
console.log(makeSimilar([8,12,6], [2,14,10])); // 2
console.log(makeSimilar([1,2,5], [4,1,3])); // 1
console.log(makeSimilar([1,1,1,1,1], [1,1,1,1,1])); // 0
console.log(makeSimilar([2,4,6,8], [2,4,6,8])); // 0
console.log(makeSimilar([10,2,8], [4,14,6])); // 3
