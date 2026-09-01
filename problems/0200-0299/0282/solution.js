/*
 * @lc app=leetcode id=282 lang=javascript
 *
 * [282] Expression Add Operators
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const result = [];
    const backtrack = (index, path, value, prev) => {
        if (index === num.length) {
            if (value === target) {
                result.push(path);
                return; 
            }
            return;
        }
        for (let i = index + 1; i <= num.length; i++) {
            const current = num.slice(index, i);
            if (current.length > 1 && current[0] === '0') continue; 
            const currentNum = Number(current);
            if (index === 0) {
                backtrack(i, current, currentNum, currentNum);
            } else {
                backtrack(i, path + '+' + current, value + currentNum, currentNum);
                backtrack(i, path + '-' + current, value - currentNum, -currentNum);
                backtrack(i, path + '*' + current, value - prev + prev * currentNum, prev * currentNum); 
            }
        }
    };
    backtrack(0, '', 0, 0);
    return result;
};
// @lc code=end
// TEST:
console.log(addOperators("123", 6)); // Output: ["1+2+3", "1*2*3"]
console.log(addOperators("232", 8)); // Output: ["2*3+2", "2+3*2"]
console.log(addOperators("105", 5)); // Output: ["1*0+5","10-5"]
console.log(addOperators("00", 0)); // Output: ["0+0", "0-0", "0*0"]  
console.log(addOperators("3456237490", 9191)); // Output: []  

