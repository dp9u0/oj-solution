/*
 * @lc app=leetcode id=947 lang=javascript
 *
 * [947] Most Stones Removed with Same Row or Column
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const parent = new Map();
    const find = (x) => {
        if (!parent.has(x)) parent.set(x, x);
        if (parent.get(x) !== x) parent.set(x, find(parent.get(x)));
        return parent.get(x);
    };
    const union = (x, y) => parent.set(find(x), find(y));

    for (const [r, c] of stones) {
        union(r, c + 10001);
    }

    const roots = new Set();
    for (const [r] of stones) {
        roots.add(find(r));
    }
    return stones.length - roots.size;
};
// @lc code=end

// TEST:
console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])); // 5
console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]]));       // 3
console.log(removeStones([[0,0]]));                                // 0
