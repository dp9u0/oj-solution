/*
 * @lc app=leetcode id=2569 lang=javascript
 *
 * [2569] Handling Sum Queries After Update
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var handleQuery = function(nums1, nums2, queries) {
    const n = nums1.length;
    // Segment tree for nums1: count of 1s with lazy flip
    let size = 1;
    while (size < n) size <<= 1;
    const tree = new Array(2 * size).fill(0);
    const lazy = new Array(2 * size).fill(0);

    // Build
    for (let i = 0; i < n; i++) tree[size + i] = nums1[i];
    for (let i = size - 1; i >= 1; i--) tree[i] = tree[2 * i] + tree[2 * i + 1];

    const apply = (node, nodeLen) => {
        tree[node] = nodeLen - tree[node];
        lazy[node] ^= 1;
    };

    const pushDown = (node, nodeLen) => {
        if (lazy[node]) {
            apply(2 * node, nodeLen >> 1);
            apply(2 * node + 1, nodeLen >> 1);
            lazy[node] = 0;
        }
    };

    const flipRange = (l, r, node, nl, nr) => {
        if (r < nl || nr < l) return;
        if (l <= nl && nr <= r) {
            apply(node, nr - nl + 1);
            return;
        }
        pushDown(node, nr - nl + 1);
        const mid = (nl + nr) >> 1;
        flipRange(l, r, 2 * node, nl, mid);
        flipRange(l, r, 2 * node + 1, mid + 1, nr);
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    };

    let sum2 = 0;
    for (let i = 0; i < n; i++) sum2 += nums2[i];

    const result = [];
    for (const [type, a, b] of queries) {
        if (type === 1) {
            flipRange(a, b, 1, 0, size - 1);
        } else if (type === 2) {
            sum2 += tree[1] * a;
        } else {
            result.push(sum2);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(handleQuery([1,0,1],[0,0,0],[[1,1,1],[2,1,0],[3,0,0]]))); // [3]
console.log(JSON.stringify(handleQuery([1],[5],[[2,0,0],[3,0,0]])));                   // [5]
console.log(JSON.stringify(handleQuery([1,0,1,1],[1,2,3,4],[[3,0,0],[1,0,1],[2,2,0],[3,0,0]]))); // [10,16]
console.log(JSON.stringify(handleQuery([0,0,0],[1,2,3],[[3,0,0]])));                    // [6]
console.log(JSON.stringify(handleQuery([1,1,1],[0,0,0],[[1,0,2],[3,0,0]])));            // [0]
