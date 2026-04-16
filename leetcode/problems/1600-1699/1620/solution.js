/*
 * @lc app=leetcode id=1620 lang=javascript
 *
 * [1620] Coordinate With Maximum Network Quality
 */

// @lc code=start
/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
    let maxQ = -1, bx = 0, by = 0;
    const r2 = radius * radius;
    for (let x = 0; x <= 50; x++) {
        for (let y = 0; y <= 50; y++) {
            let q = 0;
            for (const [tx, ty, tq] of towers) {
                const dx = x - tx, dy = y - ty;
                const d2 = dx * dx + dy * dy;
                if (d2 <= r2) {
                    q += Math.floor(tq / (1 + Math.sqrt(d2)));
                }
            }
            if (q > maxQ) { maxQ = q; bx = x; by = y; }
        }
    }
    return [bx, by];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(bestCoordinate([[1,2,5],[2,1,7],[3,1,9]], 2))); // [2,1]
console.log(JSON.stringify(bestCoordinate([[23,11,21]], 9))); // [23,11]
console.log(JSON.stringify(bestCoordinate([[1,2,13],[2,1,7],[0,1,9]], 2))); // [1,2]
console.log(JSON.stringify(bestCoordinate([[0,0,1]], 1))); // [0,0]
console.log(JSON.stringify(bestCoordinate([[50,50,50]], 50))); // [50,50]
