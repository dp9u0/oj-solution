/*
 * @lc app=leetcode id=1499 lang=javascript
 *
 * [1499] Max Value of Equation
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
    const n = points.length;
    // Deque stores indices; values are yi - xi, in decreasing order
    const deque = [];
    let result = -Infinity;

    for (let j = 0; j < n; j++) {
        const [xj, yj] = points[j];

        // Remove expired: xi < xj - k
        while (deque.length > 0 && points[deque[0]][0] < xj - k) {
            deque.shift();
        }

        // Best candidate at front
        if (deque.length > 0) {
            const i = deque[0];
            const val = (points[i][1] - points[i][0]) + (yj + xj);
            result = Math.max(result, val);
        }

        // Add j to deque, maintain decreasing order of (yi - xi)
        const vj = yj - xj;
        while (deque.length > 0 && (points[deque[deque.length - 1]][1] - points[deque[deque.length - 1]][0]) <= vj) {
            deque.pop();
        }
        deque.push(j);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(findMaxValueOfEquation([[1,3],[2,0],[5,10],[6,-10]], 1)); // 4
console.log(findMaxValueOfEquation([[0,0],[3,0],[9,2]], 3)); // 3
console.log(findMaxValueOfEquation([[1,1],[2,2],[3,3],[4,4]], 2)); // 6 (points 2,3: 2+3+1=6)
console.log(findMaxValueOfEquation([[0,0],[1,0]], 1)); // 1
console.log(findMaxValueOfEquation([[-19,9],[-15,-19],[-5,-8]], 10)); // -4
