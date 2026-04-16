/*
 * @lc app=leetcode id=3588 lang=javascript
 *
 * [3588] Find Maximum Area of a Triangle
 */

// @lc code=start
/**
 * @param {number[][]} coords
 * @return {number}
 */
var maxArea = function(coords) {
    const xMap = new Map();
    const yMap = new Map();
    for (const [x, y] of coords) {
        if (!xMap.has(x)) xMap.set(x, [Infinity, -Infinity]);
        const xp = xMap.get(x);
        xp[0] = Math.min(xp[0], y);
        xp[1] = Math.max(xp[1], y);
        if (!yMap.has(y)) yMap.set(y, [Infinity, -Infinity]);
        const yp = yMap.get(y);
        yp[0] = Math.min(yp[0], x);
        yp[1] = Math.max(yp[1], x);
    }

    let ans = -1;

    // Side parallel to y-axis: two points with same x
    if (xMap.size >= 2) {
        let globalMinX = Infinity, globalMaxX = -Infinity;
        for (const x of xMap.keys()) {
            globalMinX = Math.min(globalMinX, x);
            globalMaxX = Math.max(globalMaxX, x);
        }
        for (const [x, [minY, maxY]] of xMap) {
            if (minY === maxY) continue;
            const base = maxY - minY;
            const dx = Math.max(Math.abs(x - globalMinX), Math.abs(x - globalMaxX));
            if (dx > 0) ans = Math.max(ans, base * dx);
        }
    }

    // Side parallel to x-axis: two points with same y
    if (yMap.size >= 2) {
        let globalMinY = Infinity, globalMaxY = -Infinity;
        for (const y of yMap.keys()) {
            globalMinY = Math.min(globalMinY, y);
            globalMaxY = Math.max(globalMaxY, y);
        }
        for (const [y, [minX, maxX]] of yMap) {
            if (minX === maxX) continue;
            const base = maxX - minX;
            const dy = Math.max(Math.abs(y - globalMinY), Math.abs(y - globalMaxY));
            if (dy > 0) ans = Math.max(ans, base * dy);
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxArea([[1,1],[1,2],[3,2],[3,3]])); // 2
console.log(maxArea([[1,1],[2,2],[3,3]])); // -1
console.log(maxArea([[1,1],[1,5],[5,1]])); // 16
