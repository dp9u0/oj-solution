/*
 * @lc app=leetcode id=1390 lang=javascript
 *
 * [1390] Four Divisors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let result = 0;
    for (const num of nums) {
        const divisors = getDivisors(num);
        if (divisors.length === 4) {
            result += divisors.reduce((a, b) => a + b, 0);
        }
    }
    return result;

    function getDivisors(n) {
        const divs = [];
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                divs.push(i);
                if (i !== n / i) divs.push(n / i);
            }
        }
        return divs;
    }
};
// @lc code=end

// TEST:
console.log(sumFourDivisors([21,4,7])); // 32
console.log(sumFourDivisors([21,21])); // 64
console.log(sumFourDivisors([1,2,3,4,5])); // 0
