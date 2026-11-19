/*
 * @lc app=leetcode.cn id=1182 lang=javascript
 *
 * [1182] 与目标颜色间的最短距离
 */

// @lc code=start
/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function(colors, queries) {
    const n = colors.length;
    const left = Array.from({ length: n }, () => [-1, -1, -1, -1]);
    const right = Array.from({ length: n }, () => [-1, -1, -1, -1]);

    const lastPos = [-1, -1, -1, -1];
    for (let i = 0; i < n; i++) {
        lastPos[colors[i]] = i;
        left[i][1] = lastPos[1];
        left[i][2] = lastPos[2];
        left[i][3] = lastPos[3];
    }
    const nextPos = [-1, -1, -1, -1];
    for (let i = n - 1; i >= 0; i--) {
        nextPos[colors[i]] = i;
        right[i][1] = nextPos[1];
        right[i][2] = nextPos[2];
        right[i][3] = nextPos[3];
    }

    return queries.map(([i, c]) => {
        const l = left[i][c], r = right[i][c];
        if (l === -1 && r === -1) return -1;
        if (l === -1) return r - i;
        if (r === -1) return i - l;
        return Math.min(i - l, r - i);
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(shortestDistanceColor([1,1,2,1,3,2,2,3,3], [[1,3],[2,2],[6,1]]))); // [3,0,3]
console.log(JSON.stringify(shortestDistanceColor([1,2], [[0,3]]))); // [-1]
console.log(JSON.stringify(shortestDistanceColor([1,2,3], [[2,2]]))); // [1] (colors[2]=3, nearest 2 is at index 1)
console.log(JSON.stringify(shortestDistanceColor([1,1,1], [[0,2]]))); // [-1]
console.log(JSON.stringify(shortestDistanceColor([3,1,1,2], [[3,3]]))); // [3] (only at index 0)
