/*
 * @lc app=leetcode id=2343 lang=javascript
 *
 * [2343] Query Kth Smallest Trimmed Number
 */

// @lc code=start
/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
    return queries.map(([k, trim]) => {
        const pairs = nums.map((s, i) => [s.slice(-trim), i]);
        pairs.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] - b[1]);
        return pairs[k - 1][1];
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(smallestTrimmedNumbers(["102","473","251","814"], [[1,1],[2,3],[4,2],[1,2]])));
console.log(JSON.stringify(smallestTrimmedNumbers(["24","37","96","04"], [[2,1],[2,2]])));
