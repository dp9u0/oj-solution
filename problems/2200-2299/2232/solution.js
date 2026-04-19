/*
 * @lc app=leetcode id=2232 lang=javascript
 *
 * [2232] Minimize Result by Adding Parentheses to Expression
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function(expression) {
    const plusIdx = expression.indexOf('+');
    const left = expression.substring(0, plusIdx);
    const right = expression.substring(plusIdx + 1);

    let bestVal = Infinity;
    let bestExpr = '';

    for (let i = 0; i < left.length; i++) {
        for (let j = 1; j <= right.length; j++) {
            const a = i === 0 ? 1 : parseInt(left.substring(0, i));
            const b = parseInt(left.substring(i));
            const c = parseInt(right.substring(0, j));
            const d = j === right.length ? 1 : parseInt(right.substring(j));
            const val = a * (b + c) * d;
            if (val < bestVal) {
                bestVal = val;
                bestExpr = (i === 0 ? '' : left.substring(0, i)) + '(' +
                    left.substring(i) + '+' + right.substring(0, j) + ')' +
                    (j === right.length ? '' : right.substring(j));
            }
        }
    }

    return bestExpr;
};
// @lc code=end

// TEST:
console.log(minimizeResult("247+38"));    // 2(47+38)
console.log(minimizeResult("12+34"));     // 1(2+3)4
console.log(minimizeResult("999+999"));   // (999+999)
