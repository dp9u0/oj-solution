/*
 * @lc app=leetcode id=3710 lang=javascript
 *
 * [3710] Maximum Partition Factor
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPartitionFactor = function(points) {
    const n = points.length;
    if (n === 2) return 0;

    const d = [];
    const distSet = new Set();
    for (let i = 0; i < n; i++) {
        d[i] = [];
        for (let j = 0; j < n; j++) {
            const v = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            d[i][j] = v;
            if (i < j) distSet.add(v);
        }
    }

    const sorted = [...distSet].sort((a, b) => a - b);

    const check = (th) => {
        const color = new Int8Array(n).fill(-1);
        for (let s = 0; s < n; s++) {
            if (color[s] !== -1) continue;
            color[s] = 0;
            const q = [s];
            let qi = 0;
            while (qi < q.length) {
                const u = q[qi++];
                for (let v = 0; v < n; v++) {
                    if (u === v || d[u][v] >= th) continue;
                    if (color[v] === -1) {
                        color[v] = 1 - color[u];
                        q.push(v);
                    } else if (color[v] === color[u]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };

    let lo = 0, hi = sorted.length - 1, ans = 0;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (check(sorted[mid])) {
            ans = sorted[mid];
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxPartitionFactor([[0,0],[0,2],[2,0],[2,2]])); // 4
console.log(maxPartitionFactor([[0,0],[0,1],[10,0]])); // 11
console.log(maxPartitionFactor([[0,0],[1,0]])); // 0
console.log(maxPartitionFactor([[0,0],[1,0],[0,1],[1,1]])); // 2
console.log(maxPartitionFactor([[0,0],[3,0],[0,3],[3,3]])); // 6
