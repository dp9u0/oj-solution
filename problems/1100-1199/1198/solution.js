/*
 * @lc app=leetcode.cn id=1198 lang=javascript
 *
 * [1198] 找出所有行中最小公共元素
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    const m = mat.length;
    const cnt = new Array(10001).fill(0);
    for (const row of mat) {
        for (const v of row) cnt[v]++; // strict increase => no within-row dupes
    }
    for (let v = 1; v <= 10000; v++) {
        if (cnt[v] === m) return v;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(smallestCommonElement([[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]])); // 5
console.log(smallestCommonElement([[1,2,3],[2,3,4],[2,3,5]])); // 2
console.log(smallestCommonElement([[5]])); // 5 (single row)
console.log(smallestCommonElement([[1,2],[3,4]])); // -1
console.log(smallestCommonElement([[10],[10],[10]])); // 10
