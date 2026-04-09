/*
 * @lc app=leetcode id=3809 lang=javascript
 *
 * [3809] Best Reachable Tower
 */

// @lc code=start
/**
 * @param {number[][]} towers
 * @param {number[]} center
 * @param {number} radius
 * @return {number[]}
 */
var bestTower = function(towers, center, radius) {
    const [cx, cy] = center;
    let best = [-1, -1];
    let maxQ = -1;
    for (const [x, y, q] of towers) {
        const dist = Math.abs(x - cx) + Math.abs(y - cy);
        if (dist <= radius) {
            if (q > maxQ || (q === maxQ && (x < best[0] || (x === best[0] && y < best[1])))) {
                maxQ = q;
                best = [x, y];
            }
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(bestTower([[1,2,5],[2,1,7],[3,1,9]], [1,1], 2)); // [3,1]
console.log(bestTower([[1,3,4],[2,2,4],[4,4,7]], [0,0], 5)); // [1,3]
console.log(bestTower([[5,6,8],[0,3,5]], [1,2], 1)); // [-1,-1]
