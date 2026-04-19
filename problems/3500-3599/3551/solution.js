/*
 * @lc app=leetcode id=3551 lang=javascript
 *
 * [3551] Minimum Swaps to Sort by Digit Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const digitSum = (x) => {
        let s = 0;
        while (x > 0) { s += x % 10; x = (x / 10) | 0; }
        return s;
    };

    const arr = nums.map((v, i) => [digitSum(v), v, i]);
    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const pos = new Array(n);
    for (let i = 0; i < n; i++) pos[arr[i][2]] = i;

    const visited = new Uint8Array(n);
    let swaps = 0;
    for (let i = 0; i < n; i++) {
        if (visited[i] || pos[i] === i) continue;
        let len = 0, j = i;
        while (!visited[j]) { visited[j] = 1; j = pos[j]; len++; }
        swaps += len - 1;
    }
    return swaps;
};
// @lc code=end

// TEST:
console.log(minSwaps([37, 100])); // 1
console.log(minSwaps([22, 14, 33, 7])); // 0
console.log(minSwaps([18, 43, 34, 16])); // 2
console.log(minSwaps([1])); // 0
console.log(minSwaps([5, 3, 1, 4, 2])); // check sorted by digit sum
console.log(minSwaps([10, 20, 30, 40, 50])); // 0 (already sorted)
console.log(minSwaps([1000000000, 999999999, 1])); // large numbers
