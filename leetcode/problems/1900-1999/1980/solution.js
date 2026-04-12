/*
 * @lc app=leetcode id=1980 lang=javascript
 *
 * [1980] Find Unique Binary String
 */

// @lc code=start
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let result = '';
    for (let i = 0; i < nums.length; i++) {
        result += nums[i][i] === '0' ? '1' : '0';
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findDifferentBinaryString(['01', '10']));
// Expected: '11' (or '00')

console.log(findDifferentBinaryString(['00', '01']));
// Expected: '11' (or '10')

console.log(findDifferentBinaryString(['111', '011', '001']));
// Expected: '000' (diagonal: flip 1st of '111'=0, 2nd of '011'=0, 3rd of '001'=0)
