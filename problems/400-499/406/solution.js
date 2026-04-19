/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]);
    const queue = [];
    for (const p of people) {
        queue.splice(p[1], 0, p);
    }
    return queue;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))); // [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
console.log(JSON.stringify(reconstructQueue([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]))); // [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
