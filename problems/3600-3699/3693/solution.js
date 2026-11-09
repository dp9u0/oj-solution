/*
 * @lc app=leetcode.cn id=3693 lang=javascript
 *
 * [3693] 爬楼梯 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function(n, costs) {
    // dp[j]: 到达台阶 j 的最小总成本; 滚动变量 a=dp[j-3], b=dp[j-2], c=dp[j-1]
    let a = Infinity; // dp[-2]
    let b = Infinity; // dp[-1]
    let c = 0; // dp[0]
    for (let j = 1; j <= n; j++) {
        const next = costs[j - 1] + Math.min(c + 1, b + 4, a + 9);
        a = b;
        b = c;
        c = next;
    }
    return c;
};
// @lc code=end

// TEST:
console.log(climbStairs(4, [1, 2, 3, 4]) === 13); // 0→1→2→4
console.log(climbStairs(4, [5, 1, 6, 2]) === 11); // 0→2→4
console.log(climbStairs(3, [9, 8, 3]) === 12); // 0→3
console.log(climbStairs(1, [7]) === 8); // 0→1
console.log(climbStairs(2, [100, 1]) === 5); // 0→2
console.log(climbStairs(5, [1, 100, 100, 100, 1]) === 111); // dp=[0,2,103,106,111,111], 最优路径 0→1→3→5
console.log(climbStairs(6, [3, 1, 4, 1, 5, 9]) === 23); // dp=[0,4,5,10,10,16,23], 最优路径 0→2→4→6
