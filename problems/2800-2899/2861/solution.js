/*
 * @lc app=leetcode id=2861 lang=javascript
 *
 * [2861] Maximum Number of Alloys
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
    let result = 0;
    for (let i = 0; i < k; i++) {
        let lo = 0, hi = 2e8;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            let total = 0;
            let ok = true;
            for (let j = 0; j < n; j++) {
                const need = BigInt(composition[i][j]) * BigInt(mid);
                const have = BigInt(stock[j]);
                if (need > have) {
                    total += Number((need - have) * BigInt(cost[j]));
                }
                if (total > budget) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                result = Math.max(result, mid);
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxNumberOfAlloys(3, 2, 15, [[1,1,1],[1,1,10]], [0,0,0], [1,2,3])); // 2
console.log(maxNumberOfAlloys(3, 2, 15, [[1,1,1],[1,1,10]], [0,0,100], [1,2,3])); // 5
console.log(maxNumberOfAlloys(2, 3, 10, [[2,1],[1,2],[1,1]], [1,1], [5,5])); // 2
