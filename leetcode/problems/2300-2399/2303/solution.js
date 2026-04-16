/*
 * @lc app=leetcode id=2303 lang=javascript
 *
 * [2303] Calculate Amount Paid in Taxes
 */

// @lc code=start
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let tax = 0, prev = 0;
    for (const [upper, percent] of brackets) {
        if (income <= prev) break;
        const taxable = Math.min(upper, income) - prev;
        tax += taxable * percent / 100;
        prev = upper;
    }
    return tax;
};
// @lc code=end

// TEST:
console.log(calculateTax([[3,50],[7,10],[12,25]], 10)); // 2.65
console.log(calculateTax([[1,0],[4,25],[5,50]], 2)); // 0.25
console.log(calculateTax([[2,50]], 0)); // 0
console.log(calculateTax([[3,50]], 3)); // 1.5
