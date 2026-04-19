/*
 * @lc app=leetcode id=2111 lang=javascript
 *
 * [2111] Minimum Operations to Make the Array K-Increasing
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kIncreasing = function(arr, k) {
    const n = arr.length;
    let ans = 0;

    for (let start = 0; start < k; start++) {
        const seq = [];
        for (let i = start; i < n; i += k) seq.push(arr[i]);
        ans += seq.length - lnds(seq);
    }

    return ans;
};

const lnds = (seq) => {
    const tails = [];
    for (const x of seq) {
        let lo = 0, hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] <= x) lo = mid + 1;
            else hi = mid;
        }
        tails[lo] = x;
    }
    return tails.length;
};
// @lc code=end

// TEST:
console.log(kIncreasing([5,4,3,2,1], 1)); // 4
console.log(kIncreasing([4,1,5,2,6,2], 2)); // 0
console.log(kIncreasing([4,1,5,2,6,2], 3)); // 2
console.log(kIncreasing([1,2,3,4,5], 1)); // 0
console.log(kIncreasing([1], 1)); // 0
