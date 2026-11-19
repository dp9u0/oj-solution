/*
 * @lc app=leetcode.cn id=1229 lang=javascript
 *
 * [1229] 安排会议日程
 */

// @lc code=start
/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
    slots1.sort((a, b) => a[0] - b[0]);
    slots2.sort((a, b) => a[0] - b[0]);
    let i = 0, j = 0;
    while (i < slots1.length && j < slots2.length) {
        const start = Math.max(slots1[i][0], slots2[j][0]);
        const end = Math.min(slots1[i][1], slots2[j][1]);
        if (end - start >= duration) return [start, start + duration];
        if (slots1[i][1] < slots2[j][1]) i++; // advance the slot that ends first
        else j++;
    }
    return [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minAvailableDuration([[10,50],[60,120],[140,210]], [[0,15],[60,70]], 8))); // [60,68]
console.log(JSON.stringify(minAvailableDuration([[10,50],[60,120],[140,210]], [[0,15],[60,70]], 12))); // []
console.log(JSON.stringify(minAvailableDuration([[1,10]], [[20,30]], 5))); // [] (no overlap)
console.log(JSON.stringify(minAvailableDuration([[5,20]], [[8,25]], 12))); // [8,20] (exact overlap 12)
