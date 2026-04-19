/*
 * @lc app=leetcode id=2736 lang=javascript
 *
 * [2736] Maximum Sum Queries
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumSumQueries = function(nums1, nums2, queries) {
    const n = nums1.length;
    const m = queries.length;

    // Coordinate compression: collect all nums2 and yi values
    const allVals = new Set();
    for (let i = 0; i < n; i++) allVals.add(nums2[i]);
    for (let i = 0; i < m; i++) allVals.add(queries[i][1]);
    const sorted = [...allVals].sort((a, b) => a - b);
    const compress = v => {
        let lo = 0, hi = sorted.length - 1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (sorted[mid] < v) lo = mid + 1;
            else hi = mid - 1;
        }
        return lo;
    };

    const N = sorted.length;

    // Segment tree for range max
    let sz = 1;
    while (sz < N) sz <<= 1;
    const tree = new Array(2 * sz).fill(0);

    const update = (i, val) => {
        i += sz;
        if (val <= tree[i]) return;
        tree[i] = val;
        for (i >>= 1; i; i >>= 1) {
            tree[i] = Math.max(tree[2 * i], tree[2 * i + 1]);
        }
    };

    const query = (l, r) => {
        let res = 0;
        for (l += sz, r += sz; l <= r; l >>= 1, r >>= 1) {
            if (l & 1) res = Math.max(res, tree[l++]);
            if (!(r & 1)) res = Math.max(res, tree[r--]);
        }
        return res;
    };

    // Sort points by nums1 descending
    const points = [];
    for (let i = 0; i < n; i++) {
        points.push([nums1[i], nums2[i], nums1[i] + nums2[i]]);
    }
    points.sort((a, b) => b[0] - a[0]);

    // Sort queries by xi descending, keeping original index
    const qIdx = queries.map((q, i) => [q[0], q[1], i]);
    qIdx.sort((a, b) => b[0] - a[0]);

    const result = new Array(m);
    let pIdx = 0;

    for (const [xi, yi, qi] of qIdx) {
        while (pIdx < n && points[pIdx][0] >= xi) {
            const [, b, s] = points[pIdx++];
            update(compress(b), s);
        }
        const ans = query(compress(yi), N - 1);
        result[qi] = ans === 0 ? -1 : ans;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maximumSumQueries([4,3,1,2], [2,4,9,5], [[4,1],[1,3],[2,5]]))); // [6,10,7]
console.log(JSON.stringify(maximumSumQueries([3,2,5], [2,3,4], [[4,4],[3,2],[1,1]]))); // [9,9,9]
console.log(JSON.stringify(maximumSumQueries([2,1], [2,3], [[3,3]]))); // [-1]
console.log(JSON.stringify(maximumSumQueries([1], [1], [[1,1]]))); // [2]
console.log(JSON.stringify(maximumSumQueries([5,1], [5,5], [[1,1],[5,5]]))); // [10,10]
