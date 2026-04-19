/*
 * @lc app=leetcode id=3877 lang=javascript
 *
 * [3877] Minimum Removals to Achieve Target XOR
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minRemovals = function(nums, target) {
    const n = nums.length;
    const half = n >> 1;
    const left = nums.slice(0, half);
    const right = nums.slice(half);

    // Enumerate right half: map xor -> min removals
    const rightMap = new Map();
    const rn = right.length;
    for (let mask = 0; mask < (1 << rn); mask++) {
        let xor = 0;
        let removed = 0;
        for (let i = 0; i < rn; i++) {
            if (mask & (1 << i)) xor ^= right[i];
            else removed++;
        }
        const prev = rightMap.get(xor);
        if (prev === undefined || removed < prev) rightMap.set(xor, removed);
    }

    // Enumerate left half, find matching right half
    let ans = Infinity;
    const ln = left.length;
    for (let mask = 0; mask < (1 << ln); mask++) {
        let xor = 0;
        let removed = 0;
        for (let i = 0; i < ln; i++) {
            if (mask & (1 << i)) xor ^= left[i];
            else removed++;
        }
        const need = xor ^ target;
        const rRemoved = rightMap.get(need);
        if (rRemoved !== undefined) {
            ans = Math.min(ans, removed + rRemoved);
        }
    }

    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minRemovals([1,2,3], 2)); // 1
console.log(minRemovals([2,4], 1)); // -1
console.log(minRemovals([7], 7)); // 0
