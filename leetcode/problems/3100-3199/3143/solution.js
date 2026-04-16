/*
 * @lc app=leetcode id=3143 lang=javascript
 *
 * [3143] Maximum Points Inside the Square
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function(points, s) {
    const n = points.length;
    const items = [];
    for (let i = 0; i < n; i++) {
        const d = Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]));
        items.push({ d, tag: s[i] });
    }
    items.sort((a, b) => a.d - b.d);

    const seen = new Set();
    let count = 0, i = 0;
    while (i < n) {
        const d = items[i].d;
        const batch = [];
        while (i < n && items[i].d === d) {
            batch.push(items[i].tag);
            i++;
        }
        let valid = true;
        const bs = new Set();
        for (const tag of batch) {
            if (seen.has(tag) || bs.has(tag)) { valid = false; break; }
            bs.add(tag);
        }
        if (!valid) break;
        for (const tag of batch) seen.add(tag);
        count += batch.length;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxPointsInsideSquare([[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]], "abdca")); // 2
console.log(maxPointsInsideSquare([[1,1],[-2,-2],[-2,2]], "abb"));                 // 1
console.log(maxPointsInsideSquare([[1,1],[-1,-1],[2,-2]], "ccd"));                 // 0
