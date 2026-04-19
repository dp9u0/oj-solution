/*
 * @lc app=leetcode id=2899 lang=javascript
 *
 * [2899] Last Visited Integers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
    const seen = [];
    const ans = [];
    let k = 0;
    for (const x of nums) {
        if (x === -1) {
            k++;
            if (k <= seen.length) {
                ans.push(seen[k - 1]);
            } else {
                ans.push(-1);
            }
        } else {
            seen.unshift(x);
            k = 0;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(lastVisitedIntegers([1,2,-1,-1,-1]))); // [2,1,-1]
console.log(JSON.stringify(lastVisitedIntegers([1,-1,2,-1,-1]))); // [1,2,1]
console.log(JSON.stringify(lastVisitedIntegers([-1]))); // [-1]
console.log(JSON.stringify(lastVisitedIntegers([3,-1,-1,-1]))); // [3,-1,-1]
