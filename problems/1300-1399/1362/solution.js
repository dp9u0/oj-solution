/*
 * @lc app=leetcode id=1362 lang=javascript
 *
 * [1362] Closest Divisors
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    const find = (x) => {
        let a = Math.floor(Math.sqrt(x));
        while (a > 0) {
            if (x % a === 0) return [a, x / a];
            a--;
        }
        return [1, x];
    };

    const p1 = find(num + 1);
    const p2 = find(num + 2);
    if (Math.abs(p1[1] - p1[0]) <= Math.abs(p2[1] - p2[0])) return p1;
    return p2;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(closestDivisors(8))); // [3,3]
console.log(JSON.stringify(closestDivisors(123))); // [5,25]
console.log(JSON.stringify(closestDivisors(999))); // [25,40]
