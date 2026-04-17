/*
 * @lc app=leetcode id=3080 lang=javascript
 *
 * [3080] Mark Elements on Array by Performing Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function(nums, queries) {
    const n = nums.length;
    const marked = new Uint8Array(n);
    const sorted = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let sum = nums.reduce((a, b) => a + b, 0);
    let ptr = 0;
    const answer = [];

    for (const [idx, k] of queries) {
        // Mark index if not already marked
        if (!marked[idx]) {
            marked[idx] = 1;
            sum -= nums[idx];
        }
        // Mark k smallest unmarked
        let count = 0;
        while (ptr < n && count < k) {
            const [val, si] = sorted[ptr];
            if (!marked[si]) {
                marked[si] = 1;
                sum -= val;
                count++;
            }
            ptr++;
        }
        answer.push(sum);
    }

    return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(unmarkedSumArray([1,2,2,1,2,3,1], [[1,2],[3,3],[4,2]]))); // [8,3,0]
console.log(JSON.stringify(unmarkedSumArray([1,4,2,3], [[0,1]]))); // [7]
console.log(JSON.stringify(unmarkedSumArray([1,1,1], [[0,1],[1,1]]))); // [1,0]
console.log(JSON.stringify(unmarkedSumArray([5], [[0,0]]))); // [0]
console.log(JSON.stringify(unmarkedSumArray([3,2,1], [[2,1]]))); // [5]
