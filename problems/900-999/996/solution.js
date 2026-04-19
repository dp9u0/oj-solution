/*
 * @lc app=leetcode id=996 lang=javascript
 *
 * [996] Number of Squareful Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const visited = new Uint8Array(n);
    let count = 0;

    const isPerfectSquare = (x) => {
        const r = Math.floor(Math.sqrt(x));
        return r * r === x;
    };

    const backtrack = (prev, depth) => {
        if (depth === n) {
            count++;
            return;
        }
        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
            if (depth > 0 && !isPerfectSquare(prev + nums[i])) continue;
            visited[i] = 1;
            backtrack(nums[i], depth + 1);
            visited[i] = 0;
        }
    };

    backtrack(0, 0);
    return count;
};
// @lc code=end

// TEST:
console.log(numSquarefulPerms([1, 17, 8])); // 2
console.log(numSquarefulPerms([2, 2, 2])); // 1
console.log(numSquarefulPerms([1, 1])); // 0 (1+1=2, not perfect square)
console.log(numSquarefulPerms([1])); // 1 (single element)
