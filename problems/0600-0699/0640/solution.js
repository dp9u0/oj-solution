/*
 * @lc app=leetcode id=640 lang=javascript
 *
 * [640] Solve the Equation
 */

// @lc code=start
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    const parse = (s) => {
        let coef = 0, num = 0;
        let i = 0;
        const n = s.length;

        while (i < n) {
            let sign = 1;
            if (s[i] === '+') { i++; }
            else if (s[i] === '-') { sign = -1; i++; }

            let val = 0;
            let hasDigit = false;
            while (i < n && s[i] >= '0' && s[i] <= '9') {
                val = val * 10 + Number(s[i]);
                i++;
                hasDigit = true;
            }

            if (i < n && s[i] === 'x') {
                i++;
                coef += sign * (hasDigit ? val : 1);
            } else {
                num += sign * val;
            }
        }
        return [coef, num];
    };

    const [left, right] = equation.split('=');
    const [lCoef, lNum] = parse(left);
    const [rCoef, rNum] = parse(right);

    const coef = lCoef - rCoef;
    const val = rNum - lNum;

    if (coef === 0) {
        return val === 0 ? 'Infinite solutions' : 'No solution';
    }
    return 'x=' + (val / coef);
};
// @lc code=end

// TEST:
console.log(solveEquation('x+5-3+x=6+x-2'));  // x=2
console.log(solveEquation('x=x'));              // Infinite solutions
console.log(solveEquation('2x=x'));             // x=0
console.log(solveEquation('0x=0'));             // Infinite solutions
