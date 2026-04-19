/*
 * @lc app=leetcode id=2389 lang=javascript
 *
 * [2389] Longest Subsequence With Limited Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
    const prefix = [];
    let sum = 0;
    for (const num of nums) {
        sum += num;
        prefix.push(sum);
    }

    return queries.map(q => {
        let lo = 0, hi = prefix.length - 1, ans = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (prefix[mid] <= q) {
                ans = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return ans + 1;
    });
};
// @lc code=end

// TEST:
console.log(answerQueries([4,5,2,1], [3,10,21])); // [2,3,4]
console.log(answerQueries([2,3,4,5], [1])); // [0]
console.log(answerQueries([1,2,3,4,5], [1,5,10,15])); // [1,2,4,5]
