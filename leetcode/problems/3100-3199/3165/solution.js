/*
 * @lc app=leetcode id=3165 lang=javascript
 *
 * [3165] Maximum Sum of Subsequence With Non-adjacent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maximumSumSubsequence = function(nums, queries) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const INF = -1e15;

    // Max-plus 2x2 matrix multiply: C[i][j] = max(A[i][k] + B[k][j])
    // Stored as flat [a,b,c,d] = [[a,b],[c,d]]
    const mul = (A, B) => [
        Math.max(A[0] + B[0], A[1] + B[2]),
        Math.max(A[0] + B[1], A[1] + B[3]),
        Math.max(A[2] + B[0], A[3] + B[2]),
        Math.max(A[2] + B[1], A[3] + B[3])
    ];

    const makeMat = (x) => [0, Math.max(0, x), 0, INF];

    let N = 1;
    while (N < n) N <<= 1;
    const tree = new Array(2 * N);

    for (let i = 0; i < N; i++) {
        tree[N + i] = i < n ? makeMat(nums[i]) : [0, INF, INF, 0];
    }
    for (let i = N - 1; i >= 1; i--) {
        tree[i] = mul(tree[2 * i], tree[2 * i + 1]);
    }

    let ans = 0;
    for (const [pos, val] of queries) {
        let i = N + pos;
        tree[i] = makeMat(val);
        for (i >>= 1; i >= 1; i >>= 1) {
            tree[i] = mul(tree[2 * i], tree[2 * i + 1]);
        }
        const r = tree[1];
        ans = (ans + Math.max(r[0], r[1])) % MOD;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maximumSumSubsequence([3, 5, 9], [[1, -2], [0, -3]])); // 21
console.log(maximumSumSubsequence([0, -1], [[0, -5]])); // 0
console.log(maximumSumSubsequence([1], [[0, 2]])); // 2
console.log(maximumSumSubsequence([1, 2], [[0, -1]])); // 2
console.log(maximumSumSubsequence([5, -10, 5], [[0, 3], [2, 1]])); // 12
