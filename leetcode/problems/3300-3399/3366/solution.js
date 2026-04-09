/*
 * @lc app=leetcode id=3366 lang=javascript
 *
 * [3366] Minimum Array Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */
var minArraySum = function(nums, k, op1, op2) {
    const n = nums.length;
    // dp[j][l] = min sum using j op1s and l op2s
    const INF = Infinity;
    let dp = Array.from({ length: op1 + 1 }, () => new Array(op2 + 1).fill(INF));
    dp[0][0] = 0;

    for (const num of nums) {
        const next = Array.from({ length: op1 + 1 }, () => new Array(op2 + 1).fill(INF));

        for (let j = 0; j <= op1; j++) {
            for (let l = 0; l <= op2; l++) {
                if (dp[j][l] === INF) continue;

                // Option 0: no operation
                next[j][l] = Math.min(next[j][l], dp[j][l] + num);

                // Option 1: only op1 (ceil divide by 2)
                if (j < op1) {
                    next[j + 1][l] = Math.min(next[j + 1][l], dp[j][l] + Math.ceil(num / 2));
                }

                // Option 2: only op2 (subtract k if >= k)
                if (l < op2 && num >= k) {
                    next[j][l + 1] = Math.min(next[j][l + 1], dp[j][l] + num - k);
                }

                // Option 3: op2 first, then op1
                if (j < op1 && l < op2 && num >= k) {
                    const afterOp2 = num - k;
                    next[j + 1][l + 1] = Math.min(next[j + 1][l + 1], dp[j][l] + Math.ceil(afterOp2 / 2));
                }

                // Option 4: op1 first, then op2
                if (j < op1 && l < op2) {
                    const afterOp1 = Math.ceil(num / 2);
                    if (afterOp1 >= k) {
                        next[j + 1][l + 1] = Math.min(next[j + 1][l + 1], dp[j][l] + afterOp1 - k);
                    }
                }
            }
        }

        dp = next;
    }

    // Answer: min over all j <= op1, l <= op2
    let result = INF;
    for (let j = 0; j <= op1; j++) {
        for (let l = 0; l <= op2; l++) {
            result = Math.min(result, dp[j][l]);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minArraySum([2,8,3,19,3], 3, 1, 1)); // 23
console.log(minArraySum([2,4,3], 3, 2, 1));       // 3
