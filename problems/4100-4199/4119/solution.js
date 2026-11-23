/*
 * @lc app=leetcode.cn id=4119 lang=javascript
 *
 * [4119] 有效整数中最少置位数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minSetBits = function(nums, k) {
    const n = nums.length;
    const BITS = 17;
    const counts = new Array(BITS).fill(0);
    for (let i = 0; i < k; i++) {
        for (let b = 0; b < BITS; b++) if (nums[i] & (1 << b)) counts[b]++;
    }
    const bad = new Uint8Array(1 << BITS);
    const buildMask = () => {
        let m = 0;
        for (let b = 0; b < BITS; b++) if (counts[b] === k) m |= 1 << b;
        return m;
    };
    bad[buildMask()] = 1;
    for (let i = k; i < n; i++) {
        for (let b = 0; b < BITS; b++) {
            if (nums[i - k] & (1 << b)) counts[b]--;
            if (nums[i] & (1 << b)) counts[b]++;
        }
        bad[buildMask()] = 1;
    }
    if (bad[0]) return -1;
    const FULL = (1 << BITS) - 1;
    // SOS: sub[mask] = some bad mask is a submask of mask
    const sub = Uint8Array.from(bad);
    for (let b = 0; b < BITS; b++) {
        for (let mask = 0; mask <= FULL; mask++) {
            if (mask & (1 << b) && sub[mask ^ (1 << b)]) sub[mask] = 1;
        }
    }
    let ans = Infinity;
    for (let y = 1; y <= FULL; y++) {
        if (!sub[FULL ^ y]) {
            let pc = 0, x = y;
            while (x) { x &= x - 1; pc++; }
            if (pc < ans) {
                ans = pc;
                if (ans === 1) break;
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minSetBits([6,7,3], 2)); // 1
console.log(minSetBits([3,5,12], 1)); // 2
console.log(minSetBits([2,1], 2)); // -1
console.log(minSetBits([1], 1)); // 1
console.log(minSetBits([7], 1)); // 1
