/*
 * @lc app=leetcode id=1187 lang=javascript
 *
 * [1187] Make Array Strictly Increasing
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    arr2 = [...new Set(arr2)].sort((a, b) => a - b);
    const n = arr1.length;

    // dp maps last value -> min operations
    let dp = new Map();
    dp.set(-Infinity, 0);

    for (let i = 0; i < n; i++) {
        const next = new Map();
        for (const [prev, ops] of dp) {
            // Option 1: keep arr1[i]
            if (arr1[i] > prev) {
                if (!next.has(arr1[i]) || next.get(arr1[i]) > ops) {
                    next.set(arr1[i], ops);
                }
            }
            // Option 2: replace with smallest arr2[j] > prev
            const j = bisect(arr2, prev);
            if (j < arr2.length) {
                const val = arr2[j];
                if (!next.has(val) || next.get(val) > ops + 1) {
                    next.set(val, ops + 1);
                }
            }
        }
        if (next.size === 0) return -1;
        dp = next;
    }

    let result = Infinity;
    for (const ops of dp.values()) result = Math.min(result, ops);
    return result === Infinity ? -1 : result;
};

function bisect(arr, target) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] <= target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}
// @lc code=end

// TEST:
console.log(makeArrayIncreasing([1,5,3,6,7], [1,3,2,4])); // 1
console.log(makeArrayIncreasing([1,5,3,6,7], [4,3,1])); // 2
console.log(makeArrayIncreasing([1,5,3,6,7], [1,6,3,3])); // -1
