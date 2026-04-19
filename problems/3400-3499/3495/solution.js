/*
 * @lc app=leetcode id=3495 lang=javascript
 *
 * [3495] Minimum Operations to Make Array Elements Zero
 */

// @lc code=start
/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function(queries) {
    const S = (n) => {
        if (n <= 0) return 0;
        let sum = 0, k = 1, p = 1;
        while (4 * p - 1 <= n) {
            sum += k * 3 * p;
            k++;
            p *= 4;
        }
        sum += k * (n - p + 1);
        return sum;
    };

    let ans = 0;
    for (const [l, r] of queries) {
        const t = S(r) - S(l - 1);
        ans += Math.ceil(t / 2);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minOperations([[1,2],[2,4]]));  // 3
console.log(minOperations([[2,6]]));        // 4
