/*
 * @lc app=leetcode.cn id=1940 lang=javascript
 *
 * [1940] 排序数组之间的最长公共子序列
 */

// @lc code=start
/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function(arrays) {
    const cnt = new Array(101).fill(0);
    for (const arr of arrays) {
        for (const v of arr) cnt[v]++;
    }
    const ans = [];
    for (let v = 1; v <= 100; v++) {
        if (cnt[v] === arrays.length) ans.push(v);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(longestCommonSubsequence([[1,3,4],[1,4,7,9]]))); // [1,4]
console.log(JSON.stringify(longestCommonSubsequence([[2,3,6,8],[1,2,3,5,6,7,10],[2,3,4,6,9]]))); // [2,3,6]
console.log(JSON.stringify(longestCommonSubsequence([[1,2,3,4,5],[6,7,8]]))); // []
console.log(JSON.stringify(longestCommonSubsequence([[1],[1]]))); // [1]
console.log(JSON.stringify(longestCommonSubsequence([[1,2],[2,3],[3,4]]))); // []
