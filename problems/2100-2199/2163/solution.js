/*
 * @lc app=leetcode id=2163 lang=javascript
 *
 * [2163] Minimum Difference in Sums After Removal of Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const m = nums.length, n = m / 3;
    const swap = (a, i, j) => { const t = a[i]; a[i] = a[j]; a[j] = t; };

    const siftUp = (h, i, isMax) => {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (isMax ? h[p] >= h[i] : h[p] <= h[i]) break;
            swap(h, p, i); i = p;
        }
    };
    const siftDown = (h, i, isMax) => {
        while (true) {
            let t = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < h.length && (isMax ? h[l] > h[t] : h[l] < h[t])) t = l;
            if (r < h.length && (isMax ? h[r] > h[t] : h[r] < h[t])) t = r;
            if (t === i) break;
            swap(h, t, i); i = t;
        }
    };
    const push = (h, v, isMax) => { h.push(v); siftUp(h, h.length - 1, isMax); };
    const pop = (h, isMax) => {
        const top = h[0]; h[0] = h[h.length - 1]; h.pop();
        if (h.length > 0) siftDown(h, 0, isMax);
        return top;
    };

    const leftMin = new Array(m).fill(0);
    const maxH = [];
    let sum = 0;
    for (let i = 0; i < 2 * n; i++) {
        push(maxH, nums[i], true);
        sum += nums[i];
        if (maxH.length > n) sum -= pop(maxH, true);
        if (i >= n - 1) leftMin[i] = sum;
    }

    const minH = [];
    sum = 0;
    let ans = Infinity;
    for (let i = m - 1; i >= n; i--) {
        push(minH, nums[i], false);
        sum += nums[i];
        if (minH.length > n) sum -= pop(minH, false);
        if (i <= 2 * n && minH.length === n) {
            ans = Math.min(ans, leftMin[i - 1] - sum);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minimumDifference([3,1,2])); // -1
console.log(minimumDifference([7,9,5,8,1,3])); // 1
console.log(minimumDifference([1,2,3])); // -2
console.log(minimumDifference([1,1,1,1,1,1])); // 0
console.log(minimumDifference([16,46,43,41,42,14,36,49,50,28,38,25,17,5,22,9,6,44,2,20,38,43,31,36,14,33,3,9,48,42])); // -90
