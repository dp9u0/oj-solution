/*
 * @lc app=leetcode id=3940 lang=javascript
 *
 * [3940] Limit Occurrences in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function(nums, k) {
    const res = [];
    let count = 0;
    for (const num of nums) {
        if (res.length === 0 || res[res.length - 1] !== num) {
            count = 1;
            res.push(num);
        } else if (count < k) {
            count++;
            res.push(num);
        }
    }
    return res;
};
// @lc code=end

// TEST:
const assertEq = (a, b) => console.log(JSON.stringify(a) === JSON.stringify(b) ? 'PASS' : `FAIL: ${JSON.stringify(a)} !== ${JSON.stringify(b)}`);

assertEq(limitOccurrences([1,1,1,2,2,3], 2), [1,1,2,2,3]);
assertEq(limitOccurrences([1,2,3], 1), [1,2,3]);
assertEq(limitOccurrences([1,1,1,1], 1), [1]);
assertEq(limitOccurrences([1,1,1,1], 4), [1,1,1,1]);
assertEq(limitOccurrences([5], 1), [5]);
assertEq(limitOccurrences([1,1,2,2,2,3,3,3,3], 2), [1,1,2,2,3,3]);
