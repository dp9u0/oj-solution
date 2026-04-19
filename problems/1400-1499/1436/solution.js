/*
 * @lc app=leetcode id=1436 lang=javascript
 *
 * [1436] Destination City
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const outgoing = new Set(paths.map(p => p[0]));
    for (const [, dest] of paths) {
        if (!outgoing.has(dest)) return dest;
    }
};
// @lc code=end

// TEST:
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])); // "Sao Paulo"
console.log(destCity([["B","C"],["D","B"],["C","A"]])); // "A"
console.log(destCity([["A","Z"]])); // "Z"
