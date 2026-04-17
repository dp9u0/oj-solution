/*
 * @lc app=leetcode id=3025 lang=javascript
 *
 * [3025] Find the Number of Ways to Place People I
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    const n = points.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            const [ax, ay] = points[i];
            const [bx, by] = points[j];
            if (ax > bx || ay < by) continue;

            let valid = true;
            for (let k = 0; k < n; k++) {
                if (k === i || k === j) continue;
                const [px, py] = points[k];
                if (px >= ax && px <= bx && py >= by && py <= ay) {
                    valid = false;
                    break;
                }
            }
            if (valid) count++;
        }
    }

    return count;
};
// @lc code=end

// TEST:
console.log(numberOfPairs([[1,1],[2,2],[3,3]])); // 0
console.log(numberOfPairs([[6,2],[4,4],[2,6]])); // 2
console.log(numberOfPairs([[3,1],[1,3],[1,1]])); // 2
console.log(numberOfPairs([[0,0],[1,0]])); // 1
console.log(numberOfPairs([[0,0],[0,1]])); // 0
