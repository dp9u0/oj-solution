/*
 * @lc app=leetcode id=2363 lang=javascript
 *
 * [2363] Merge Similar Items
 */

// @lc code=start
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let map = new Map();
    for (let [v, w] of items1) map.set(v, (map.get(v) || 0) + w);
    for (let [v, w] of items2) map.set(v, (map.get(v) || 0) + w);
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]])));
console.log(JSON.stringify(mergeSimilarItems([[1,1],[3,2],[2,3]], [[2,1],[3,2],[1,3]])));
console.log(JSON.stringify(mergeSimilarItems([[1,3],[2,2]], [[7,1],[2,2],[1,4]])));
