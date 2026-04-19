/*
 * @lc app=leetcode id=3288 lang=javascript
 *
 * [3288] Length of the Longest Increasing Path
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var maxPathLength = function(coordinates, k) {
    const [xk, yk] = coordinates[k];

    const left = [];
    const right = [];
    for (const [x, y] of coordinates) {
        if (x < xk && y < yk) left.push([x, y]);
        else if (x > xk && y > yk) right.push([x, y]);
    }

    const lisLen = (arr) => {
        arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
        const tails = [];
        for (const [, y] of arr) {
            let lo = 0, hi = tails.length;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (tails[mid] < y) lo = mid + 1;
                else hi = mid;
            }
            tails[lo] = y;
        }
        return tails.length;
    };

    return lisLen(left) + 1 + lisLen(right);
};
// @lc code=end

// TEST:
console.log(maxPathLength([[3,1],[2,2],[4,1],[0,0],[5,3]], 1)); // 3
console.log(maxPathLength([[2,1],[7,0],[5,6]], 2)); // 2
console.log(maxPathLength([[1,1]], 0)); // 1
console.log(maxPathLength([[1,1],[2,2],[3,3],[4,4]], 1)); // 4
console.log(maxPathLength([[5,5],[1,1],[3,3],[2,2],[4,4]], 0)); // 1
console.log(maxPathLength([[0,0],[1,3],[2,1],[3,2],[4,4]], 2)); // 3
