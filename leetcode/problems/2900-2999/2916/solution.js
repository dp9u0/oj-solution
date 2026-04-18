/*
 * @lc app=leetcode id=2916 lang=javascript
 *
 * [2916] Subarrays Distinct Element Sum of Squares II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const last = new Map();
    const size = n + 2;

    const b1 = new Array(size).fill(0n);
    const b2 = new Array(size).fill(0n);

    const add = (b, i, v) => {
        for (; i < size; i += i & -i) b[i] += v;
    };
    const sum = (b, i) => {
        let s = 0n;
        for (; i > 0; i -= i & -i) s += b[i];
        return s;
    };
    const rangeAdd = (l, r, v) => {
        add(b1, l, v);
        add(b1, r + 1, -v);
        add(b2, l, v * BigInt(l - 1));
        add(b2, r + 1, -v * BigInt(r));
    };
    const prefixSum = (i) => sum(b1, i) * BigInt(i) - sum(b2, i);
    const rangeSum = (l, r) => prefixSum(r) - prefixSum(l - 1);

    let ans = 0n;
    let sumDSq = 0n;

    for (let j = 0; j < n; j++) {
        const prev = last.get(nums[j]) ?? -1;
        const l = prev + 2; // 1-indexed
        const r = j + 1;
        const s = rangeSum(l, r);
        const len = BigInt(r - l + 1);
        sumDSq = (sumDSq + 2n * s + len) % BigInt(MOD);
        rangeAdd(l, r, 1n);
        ans = (ans + sumDSq) % BigInt(MOD);
        last.set(nums[j], j);
    }

    return Number(ans);
};
// @lc code=end

// TEST:
console.log(sumCounts([1,2,1])); // 15
console.log(sumCounts([2,2])); // 3
console.log(sumCounts([1,1,1])); // 6
console.log(sumCounts([1,2,3])); // 1+1+1+4+4+9=20
console.log(sumCounts([1])); // 1
