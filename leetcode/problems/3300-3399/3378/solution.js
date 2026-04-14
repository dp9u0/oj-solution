/*
 * @lc app=leetcode id=3378 lang=javascript
 *
 * [3378] Count Connected Components in LCM Graph
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var countComponents = function(nums, threshold) {
    const n = nums.length;
    const parent = [];
    const rnk = [];
    for (let i = 0; i < n; i++) {
        parent[i] = i;
        rnk[i] = 0;
    }

    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const union = (x, y) => {
        let px = find(x), py = find(y);
        if (px === py) return;
        if (rnk[px] < rnk[py]) { let t = px; px = py; py = t; }
        parent[py] = px;
        if (rnk[px] === rnk[py]) rnk[px]++;
    };

    const firstDivisor = new Int32Array(threshold + 1).fill(-1);

    for (let i = 0; i < n; i++) {
        const a = nums[i];
        if (a > threshold) continue;
        for (let m = a; m <= threshold; m += a) {
            if (firstDivisor[m] === -1) {
                firstDivisor[m] = i;
            } else {
                union(i, firstDivisor[m]);
            }
        }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (find(i) === i) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countComponents([2,4,8,3,9], 5));
console.log(countComponents([2,4,8,3,9,12], 10));
