/*
 * @lc app=leetcode id=3638 lang=javascript
 *
 * [3638] Maximum Balanced Shipments
 */

// @lc code=start
/**
 * @param {number[]} weight
 * @return {number}
 */
var maxBalancedShipments = function(weight) {
    const n = weight.length;
    const dp = new Array(n + 1).fill(0);
    const pm = new Array(n + 1).fill(0);
    const stack = []; // monotonic decreasing stack of positions

    for (let i = 0; i < n; i++) {
        while (stack.length && weight[stack[stack.length - 1]] <= weight[i]) {
            stack.pop();
        }
        if (stack.length) {
            const p = stack[stack.length - 1];
            dp[i + 1] = Math.max(dp[i], pm[p] + 1);
        } else {
            dp[i + 1] = dp[i];
        }
        pm[i + 1] = Math.max(pm[i], dp[i + 1]);
        stack.push(i);
    }

    return dp[n];
};
// @lc code=end

// TEST:
console.log(maxBalancedShipments([2, 5, 1, 4, 3])); // 2
console.log(maxBalancedShipments([4, 4]));           // 0
console.log(maxBalancedShipments([3, 1, 2, 0]));     // 2
console.log(maxBalancedShipments([1, 2, 0]));        // 1
