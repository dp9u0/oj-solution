/*
 * @lc app=leetcode id=3569 lang=javascript
 *
 * [3569] Maximize Count of Distinct Primes After Split
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumCount = function(nums, queries) {
    const MAX_V = 100001;
    const isPrime = new Uint8Array(MAX_V);
    isPrime.fill(1);
    isPrime[0] = isPrime[1] = 0;
    for (let i = 2; i * i < MAX_V; i++)
        if (isPrime[i]) for (let j = i * i; j < MAX_V; j += i) isPrime[j] = 0;

    const n = nums.length;
    const posMap = new Map();

    const bsInsert = (arr, v) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) { const m = (lo + hi) >> 1; if (arr[m] < v) lo = m + 1; else hi = m; }
        arr.splice(lo, 0, v);
    };

    const bsRemove = (arr, v) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) { const m = (lo + hi) >> 1; if (arr[m] < v) lo = m + 1; else hi = m; }
        arr.splice(lo, 1);
    };

    // Segment tree: range add + global max
    let segN = 1;
    while (segN < n) segN <<= 1;
    const tree = new Int32Array(2 * segN);
    const lazy = new Int32Array(2 * segN);

    const push = (nd) => {
        if (lazy[nd]) {
            tree[nd * 2] += lazy[nd]; lazy[nd * 2] += lazy[nd];
            tree[nd * 2 + 1] += lazy[nd]; lazy[nd * 2 + 1] += lazy[nd];
            lazy[nd] = 0;
        }
    };

    const rangeAdd = (nd, nl, nr, l, r, v) => {
        if (l > r || nl > r || nr < l) return;
        if (l <= nl && nr <= r) { tree[nd] += v; lazy[nd] += v; return; }
        push(nd);
        const mid = (nl + nr) >> 1;
        rangeAdd(nd * 2, nl, mid, l, r, v);
        rangeAdd(nd * 2 + 1, mid + 1, nr, l, r, v);
        tree[nd] = Math.max(tree[nd * 2], tree[nd * 2 + 1]);
    };

    const add = (l, r, v) => { if (l <= r) rangeAdd(1, 0, segN - 1, l, r, v); };
    const qMax = () => tree[1];

    // Init positions
    for (let i = 0; i < n; i++) {
        if (isPrime[nums[i]]) {
            if (!posMap.has(nums[i])) posMap.set(nums[i], []);
            bsInsert(posMap.get(nums[i]), i);
        }
    }

    let distinct = 0;
    for (const [, arr] of posMap) {
        distinct++;
        if (arr.length >= 2) add(arr[0] + 1, arr[arr.length - 1], 1);
    }

    const ans = [];

    for (const [idx, val] of queries) {
        const old = nums[idx];
        if (old !== val) {
            nums[idx] = val;

            // Remove old
            if (isPrime[old] && posMap.has(old)) {
                const arr = posMap.get(old);
                if (arr.length >= 2) add(arr[0] + 1, arr[arr.length - 1], -1);
                bsRemove(arr, idx);
                if (arr.length === 0) { posMap.delete(old); distinct--; }
                else if (arr.length >= 2) add(arr[0] + 1, arr[arr.length - 1], 1);
            }

            // Add new
            if (isPrime[val]) {
                if (posMap.has(val)) {
                    const arr = posMap.get(val);
                    if (arr.length >= 2) add(arr[0] + 1, arr[arr.length - 1], -1);
                    bsInsert(arr, idx);
                    if (arr.length >= 2) add(arr[0] + 1, arr[arr.length - 1], 1);
                } else {
                    posMap.set(val, [idx]);
                    distinct++;
                }
            }
        }

        ans.push(distinct + qMax());
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maximumCount([2,1,3,1,2], [[1,2],[3,3]])); // [3,4]
console.log(maximumCount([2,1,4], [[0,1]])); // [0]
console.log(maximumCount([3,2,3], [[0,2]])); // [3]
console.log(maximumCount([2,3], [[0,5]])); // [2]
console.log(maximumCount([5,5,5,5], [[0,2],[1,3]])); // [3,4]
