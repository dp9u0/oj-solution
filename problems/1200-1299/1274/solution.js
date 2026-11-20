/*
 * @lc app=leetcode.cn id=1274 lang=javascript
 *
 * [1274] 矩形内船只的数目
 */

// @lc code=start
/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function(sea, topRight, bottomLeft) {
    const count = (tr, bl) => {
        if (tr[0] < bl[0] || tr[1] < bl[1]) return 0;
        if (!sea.hasShips(tr, bl)) return 0;
        if (tr[0] === bl[0] && tr[1] === bl[1]) return 1; // single point with a ship
        const mx = (tr[0] + bl[0]) >> 1, my = (tr[1] + bl[1]) >> 1;
        return count([mx, my], bl)                       // bottom-left
             + count(tr, [mx + 1, my + 1])               // top-right
             + count([tr[0], my], [mx + 1, bl[1]])       // top-left
             + count([mx, tr[1]], [bl[0], my + 1]);      // bottom-right
    };
    return count(topRight, bottomLeft);
};
// @lc code=end

// TEST:
const makeSea = (ships) => ({
    hasShips: (tr, bl) =>
        ships.some(([x, y]) => x >= bl[0] && x <= tr[0] && y >= bl[1] && y <= tr[1]),
});
console.log(countShips(makeSea([[1,1],[2,2],[3,3],[5,5]]), [4,4], [0,0])); // 3
console.log(countShips(makeSea([[1,1],[2,2],[3,3]]), [1000,1000], [0,0])); // 3
console.log(countShips(makeSea([]), [10,10], [0,0])); // 0
console.log(countShips(makeSea([[7,7]]), [7,7], [7,7])); // 1 (single point)
