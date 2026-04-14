/*
 * @lc app=leetcode id=1598 lang=javascript
 *
 * [1598] Crawler Log Folder
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;
    for (const log of logs) {
        if (log === '../') depth = Math.max(0, depth - 1);
        else if (log !== './') depth++;
    }
    return depth;
};
// @lc code=end

// TEST:
console.log(minOperations(["d1/","d2/","../","d21/","./"]));
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));
console.log(minOperations(["d1/","../","../","../"]));
