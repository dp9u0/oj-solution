/*
 * @lc app=leetcode.cn id=2557 lang=javascript
 *
 * [2557] 从一个范围内选择最多整数 II
 */

// @lc code=start
/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    const b = [...new Set(banned)].filter((x) => x <= n).sort((x, y) => x - y);
    let count = 0, sum = 0;
    let lo = 1;
    const runs = [];
    for (const bv of b) {
        if (bv >= lo) {
            runs.push([lo, bv - 1]);
            lo = bv + 1;
        }
    }
    runs.push([lo, n]);
    for (const [rl, rh] of runs) {
        if (rl > rh) continue;
        const t = rh - rl + 1;
        const cost = ((rl + rh) * t) / 2;
        if (sum + cost <= maxSum) {
            count += t;
            sum += cost;
        } else {
            // binary search largest cnt with sum + cnt*rl + cnt*(cnt-1)/2 <= maxSum
            let l = 0, r = t;
            while (l < r) {
                const mid = (l + r + 1) >> 1;
                const c = mid * rl + (mid * (mid - 1)) / 2;
                if (sum + c <= maxSum) l = mid;
                else r = mid - 1;
            }
            count += l;
            break;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxCount([1,4,6], 6, 4)); // 1
console.log(maxCount([4,3,5,6], 7, 18)); // 3
console.log(maxCount([11], 7, 50)); // 7 (banned > n ignored)
console.log(maxCount([], 5, 3)); // 2 (1+2=3)
console.log(maxCount([2], 1000000000, 1000000000000000)); // 44721358 (budget-saturating)
