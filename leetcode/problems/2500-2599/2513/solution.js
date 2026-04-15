/*
 * @lc app=leetcode id=2513 lang=javascript
 *
 * [2513] Minimize the Maximum of Two Arrays
 */

// @lc code=start
/**
 * @param {number} divisor1
 * @param {number} divisor2
 * @param {number} uniqueCnt1
 * @param {number} uniqueCnt2
 * @return {number}
 */
var minimizeSet = function(divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (divisor1 / gcd(divisor1, divisor2)) * divisor2;

    const check = (x) => {
        const notDiv1 = x - Math.floor(x / divisor1);
        const notDiv2 = x - Math.floor(x / divisor2);
        // Inclusion-exclusion: not divisible by BOTH d1 AND d2
        const notDivBoth = x - Math.floor(x / divisor1) - Math.floor(x / divisor2) + Math.floor(x / lcm);
        const only1 = notDiv1 - notDivBoth;
        const only2 = notDiv2 - notDivBoth;
        const need1 = Math.max(0, uniqueCnt1 - only1);
        const need2 = Math.max(0, uniqueCnt2 - only2);
        return need1 + need2 <= notDivBoth;
    };

    let lo = 1, hi = 2 * (uniqueCnt1 + uniqueCnt2);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (check(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minimizeSet(2, 7, 1, 3)); // 4
console.log(minimizeSet(3, 5, 2, 1)); // 3
console.log(minimizeSet(2, 4, 8, 2)); // 15
