/*
 * @lc app=leetcode id=3309 lang=javascript
 *
 * [3309] Maximum Possible Number by Binary Concatenation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function(nums) {
    let bitLen = (x) => x === 0 ? 1 : 32 - Math.clz32(x);
    let concat = (a, b, c) => ((a << bitLen(b)) | b) << bitLen(c) | c;
    let [a, b, c] = nums;
    return Math.max(
        concat(a, b, c), concat(a, c, b),
        concat(b, a, c), concat(b, c, a),
        concat(c, a, b), concat(c, b, a)
    );
};
// @lc code=end

// TEST:
console.log(maxGoodNumber([1,2,3]));
console.log(maxGoodNumber([2,8,16]));
console.log(maxGoodNumber([1,1,1]));
