/*
 * @lc app=leetcode id=3382 lang=javascript
 *
 * [3382] Maximum Area Rectangle With Point Constraints II
 */

// @lc code=start
/**
 * @param {number[]} xCoord
 * @param {number[]} yCoord
 * @return {number}
 */
var maxRectangleArea = function(xCoord, yCoord) {
    const n = xCoord.length;
    const points = [];
    for (let i = 0; i < n; i++) points.push([xCoord[i], yCoord[i]]);
    points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // Group by x
    const groups = new Map();
    for (const [x, y] of points) {
        if (!groups.has(x)) groups.set(x, []);
        groups.get(x).push(y);
    }
    const sortedXs = [...groups.keys()].sort((a, b) => a - b);

    // Discretize y
    const allY = [...new Set(points.map(p => p[1]))].sort((a, b) => a - b);
    const yIdx = new Map();
    allY.forEach((y, i) => yIdx.set(y, i));
    const m = allY.length;

    // Segment tree for range max (bottom-up)
    const seg = new Array(2 * m).fill(-1);

    const update = (pos, val) => {
        pos += m;
        seg[pos] = Math.max(seg[pos], val);
        for (pos >>= 1; pos; pos >>= 1)
            seg[pos] = Math.max(seg[2 * pos], seg[2 * pos + 1]);
    };

    const query = (l, r) => {
        // max on [l, r)
        if (l >= r) return -1;
        let res = -1;
        for (l += m, r += m; l < r; l >>= 1, r >>= 1) {
            if (l & 1) res = Math.max(res, seg[l++]);
            if (r & 1) res = Math.max(res, seg[--r]);
        }
        return res;
    };

    const pairMap = new Map();
    let ans = -1;

    for (const x of sortedXs) {
        const ys = groups.get(x);
        for (let i = 0; i < ys.length - 1; i++) {
            const y1 = ys[i], y2 = ys[i + 1];
            const key = y1 + ',' + y2;
            if (pairMap.has(key)) {
                const px = pairMap.get(key);
                // Check range [y1, y2] inclusive for any point with x > px
                const lo = yIdx.get(y1);
                const hi = yIdx.get(y2) + 1;
                if (query(lo, hi) <= px) {
                    ans = Math.max(ans, (x - px) * (y2 - y1));
                }
            }
            pairMap.set(key, x);
        }
        for (const y of ys) {
            update(yIdx.get(y), x);
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxRectangleArea([1, 1, 3, 3], [1, 3, 1, 3])); // 4
console.log(maxRectangleArea([1, 1, 3, 3, 2], [1, 3, 1, 3, 2])); // -1
console.log(maxRectangleArea([1, 1, 3, 3, 1, 3], [1, 3, 1, 3, 2, 2])); // 2
console.log(maxRectangleArea([1, 1], [1, 3])); // -1
console.log(maxRectangleArea([0, 0, 5, 5, 0, 5], [0, 3, 0, 3, 1, 1])); // 10
