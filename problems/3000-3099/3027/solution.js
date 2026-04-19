/*
 * @lc app=leetcode id=3027 lang=javascript
 *
 * [3027] Find the Number of Ways to Place People II
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    points.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]);

    const n = points.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let maxY = -Infinity;
        for (let j = i + 1; j < n; j++) {
            if (points[j][1] <= points[i][1]) {
                if (points[j][1] > maxY) count++;
                maxY = Math.max(maxY, points[j][1]);
            }
        }
    }

    return count;
};
// @lc code=end

// TEST:
console.log(numberOfPairs([[1,1],[2,2],[3,3]])); // 0
console.log(numberOfPairs([[6,2],[4,4],[2,6]])); // 2
console.log(numberOfPairs([[3,1],[1,3],[1,1]])); // 2
console.log(numberOfPairs([[1,1],[2,1],[3,1]])); // 2
console.log(numberOfPairs([[1,1],[1,1]])); // won't happen (distinct points)
console.log(numberOfPairs([[0,0],[1,0]])); // 1
