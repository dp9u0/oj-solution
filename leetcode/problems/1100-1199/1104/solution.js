/*
 * @lc app=leetcode id=1104 lang=javascript
 *
 * [1104] Path In Zigzag Labelled Binary Tree
 */

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    const result = [];
    let d = Math.floor(Math.log2(label));
    let cur = label;
    while (d >= 0) {
        result.push(cur);
        const level = 1 << d;
        const normal = (d % 2 === 0) ? cur : (3 * level - 1 - cur);
        d--;
        const parentNormal = normal >> 1;
        if (d >= 0) {
            const parentLevel = 1 << d;
            cur = (d % 2 === 0) ? parentNormal : (3 * parentLevel - 1 - parentNormal);
        }
    }
    return result.reverse();
};
// @lc code=end

// TEST:
console.log(pathInZigZagTree(14)); // [1,3,4,14]
console.log(pathInZigZagTree(26)); // [1,2,6,10,26]
console.log(pathInZigZagTree(1));  // [1]
