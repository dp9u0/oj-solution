/*
 * @lc app=leetcode id=1906 lang=javascript
 *
 * [1906] Minimum Absolute Difference Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function(nums, queries) {
    // prefix[c][i] = count of value c in nums[0..i-1]
    const prefix = Array.from({ length: 101 }, () => new Int32Array(nums.length + 1));
    for (let i = 0; i < nums.length; i++) {
        for (let c = 1; c <= 100; c++) prefix[c][i + 1] = prefix[c][i];
        prefix[nums[i]][i + 1]++;
    }

    const result = [];
    for (const [l, r] of queries) {
        let prev = -1, minDiff = Infinity;
        for (let c = 1; c <= 100; c++) {
            if (prefix[c][r + 1] - prefix[c][l] > 0) {
                if (prev !== -1) minDiff = Math.min(minDiff, c - prev);
                prev = c;
            }
        }
        result.push(minDiff === Infinity ? -1 : minDiff);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minDifference([1,3,4,8], [[0,1],[1,2],[2,3],[0,3]])));
// [2,1,4,1]
console.log(JSON.stringify(minDifference([4,5,2,2,7,10], [[2,3],[0,2],[0,5],[3,5]])));
// [-1,1,1,3]
console.log(JSON.stringify(minDifference([1,1,1], [[0,2]])));
// [-1]
console.log(JSON.stringify(minDifference([1,2], [[0,1]])));
// [1]
console.log(JSON.stringify(minDifference([1,100], [[0,1]])));
// [99]
