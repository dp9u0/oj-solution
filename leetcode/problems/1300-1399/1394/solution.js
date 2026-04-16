/*
 * @lc app=leetcode id=1394 lang=javascript
 *
 * [1394] Find Lucky Integer in an Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = new Array(501).fill(0);
    for (const x of arr) freq[x]++;
    for (let i = 500; i >= 1; i--) {
        if (freq[i] === i) return i;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(findLucky([2,2,3,4])); // 2
console.log(findLucky([1,2,2,3,3,3])); // 3
console.log(findLucky([2,2,2,3,3])); // -1
console.log(findLucky([7])); // -1
console.log(findLucky([1])); // 1
