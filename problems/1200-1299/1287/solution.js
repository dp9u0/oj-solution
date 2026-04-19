/*
 * @lc app=leetcode id=1287 lang=javascript
 *
 * [1287] Element Appearing More Than 25% In Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const threshold = arr.length / 4;
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
            if (count > threshold) return arr[i];
        } else {
            count = 1;
        }
    }
    return arr[0];
};
// @lc code=end

// TEST:
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10])); // 6
console.log(findSpecialInteger([1,1])); // 1
console.log(findSpecialInteger([1,2,3,3])); // 3
console.log(findSpecialInteger([1])); // 1
