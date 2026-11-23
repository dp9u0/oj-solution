/*
 * @lc app=leetcode.cn id=4118 lang=javascript
 *
 * [4118] 构造山型数组的最少操作次数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    if (n < 3) return -1;
    const INF = Infinity;
    const Vmax = Math.max(...nums) + n;
    // left[i][v]: min cost for nums[0..i] strictly increasing ending at value v
    const leftAll = [];
    let prev = new Array(Vmax + 1).fill(INF);
    for (let v = 1; v <= Vmax; v++) prev[v] = Math.abs(nums[0] - v);
    leftAll.push(prev);
    for (let i = 1; i < n; i++) {
        const cur = new Array(Vmax + 1).fill(INF);
        let runMin = INF;
        for (let v = 1; v <= Vmax; v++) {
            cur[v] = Math.abs(nums[i] - v) + runMin;
            if (leftAll[i - 1][v] < runMin) runMin = leftAll[i - 1][v];
        }
        leftAll.push(cur);
        prev = cur;
    }
    // right[i][v]: min cost for nums[i..n-1] strictly decreasing starting at value v
    const rightAll = new Array(n);
    let rprev = new Array(Vmax + 1).fill(INF);
    for (let v = 1; v <= Vmax; v++) rprev[v] = Math.abs(nums[n - 1] - v);
    rightAll[n - 1] = rprev;
    for (let i = n - 2; i >= 0; i--) {
        const cur = new Array(Vmax + 1).fill(INF);
        let runMin = INF;
        for (let v = 1; v <= Vmax; v++) {
            cur[v] = Math.abs(nums[i] - v) + runMin;
            if (rightAll[i + 1][v] < runMin) runMin = rightAll[i + 1][v];
        }
        rightAll[i] = cur;
        rprev = cur;
    }
    let ans = INF;
    for (let i = 1; i <= n - 2; i++) {
        const L = leftAll[i], R = rightAll[i];
        for (let v = 1; v <= Vmax; v++) {
            const cand = L[v] + R[v] - Math.abs(nums[i] - v);
            if (cand < ans) ans = cand;
        }
    }
    return ans === INF ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minOperations([2,2,3])); // 2
console.log(minOperations([9,4,9])); // 6
console.log(minOperations([5,7,7,4])); // 1
console.log(minOperations([1,2])); // -1
console.log(minOperations([1,1,1])); // 1
