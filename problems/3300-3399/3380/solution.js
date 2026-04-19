/*
 * @lc app=leetcode id=3380 lang=javascript
 *
 * [3380] Maximum Area Rectangle With Point Constraints I
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function(points) {
    const n = points.length;
    if (n < 4) return -1;

    const pointSet = new Set(points.map(p => `${p[0]},${p[1]}`));
    let maxArea = -1;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            // Skip if same x or same y (can't form diagonal)
            if (x1 === x2 || y1 === y2) continue;

            // Check if all 4 corners exist
            if (!pointSet.has(`${x1},${y2}`) || !pointSet.has(`${x2},${y1}`)) continue;

            // Rectangle bounds
            const minX = Math.min(x1, x2);
            const maxX = Math.max(x1, x2);
            const minY = Math.min(y1, y2);
            const maxY = Math.max(y1, y2);

            // Check no other point inside or on border
            let valid = true;
            for (const p of points) {
                if (p[0] === x1 && p[1] === y1) continue;
                if (p[0] === x2 && p[1] === y2) continue;
                if (p[0] === x1 && p[1] === y2) continue;
                if (p[0] === x2 && p[1] === y1) continue;

                if (p[0] >= minX && p[0] <= maxX && p[1] >= minY && p[1] <= maxY) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                maxArea = Math.max(maxArea, (maxX - minX) * (maxY - minY));
            }
        }
    }

    return maxArea;
};
// @lc code=end

// TEST:
console.log(maxRectangleArea([[1,1],[1,3],[3,1],[3,3]])); // 4
console.log(maxRectangleArea([[1,1],[1,3],[3,1],[3,3],[2,2]])); // -1
console.log(maxRectangleArea([[1,1],[1,3],[3,1],[3,3],[1,2],[3,2]])); // 2
console.log(maxRectangleArea([[1,1],[2,2]])); // -1
console.log(maxRectangleArea([[0,0],[0,2],[1,0],[1,2],[2,0],[2,2]])); // 2
