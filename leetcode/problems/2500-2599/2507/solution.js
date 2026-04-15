/*
 * @lc app=leetcode id=2507 lang=javascript
 *
 * [2507] Smallest Value After Replacing With Sum of Prime Factors
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function(n) {
    let sumOfPrimeFactors = (x) => {
        let sum = 0;
        for (let i = 2; i * i <= x; i++) {
            while (x % i === 0) {
                sum += i;
                x /= i;
            }
        }
        if (x > 1) sum += x;
        return sum;
    };

    let ans = n;
    while (true) {
        let s = sumOfPrimeFactors(n);
        if (s === n) break;
        ans = Math.min(ans, s);
        n = s;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(smallestValue(15));
console.log(smallestValue(3));
console.log(smallestValue(4));
