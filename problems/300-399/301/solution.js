/*
 * @lc app=leetcode id=301 lang=javascript
 *
 * [301] Remove Invalid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let result = [];
    let maxLen = 0;
    
    // 检查字符串是否有效
    function isValid(str) {
        let count = 0;
        for (let char of str) {
            if (char === '(') count++;
            else if (char === ')') count--;
            if (count < 0) return false;
        }
        return count === 0;
    }
    
    // DFS回溯
    function dfs(curr, start, leftCount, rightCount) {
        if (leftCount === 0 && rightCount === 0) {
            if (isValid(curr)) {
                if (curr.length > maxLen) {
                    result = [curr];
                    maxLen = curr.length;
                } else if (curr.length === maxLen && !result.includes(curr)) {
                    result.push(curr);
                }
            }
            return;
        }
        
        for (let i = start; i < curr.length; i++) {
            // 跳过重复的括号
            if (i !== start && curr[i] === curr[i-1]) continue;
            
            // 当前字符
            let char = curr[i];
            
            // 如果不是括号，继续
            if (char !== '(' && char !== ')') continue;
            
            // 剩余的字符串
            let left = curr.slice(0, i);
            let right = curr.slice(i + 1);
            let next = left + right;
            
            // 删除左括号
            if (leftCount > 0 && char === '(') {
                dfs(next, i, leftCount - 1, rightCount);
            }
            // 删除右括号
            if (rightCount > 0 && char === ')') {
                dfs(next, i, leftCount, rightCount - 1);
            }
        }
    }
    
    // 计算需要删除的左括号和右括号的数量
    let leftRemove = 0;
    let rightRemove = 0;
    for (let char of s) {
        if (char === '(') leftRemove++;
        else if (char === ')') {
            if (leftRemove > 0) leftRemove--;
            else rightRemove++;
        }
    }
    
    dfs(s, 0, leftRemove, rightRemove);
    return result.length === 0 ? [""] : result;
};
// @lc code=end
// TEST:
console.log(removeInvalidParentheses("()())()")); // ["(())()","()()()"]
console.log(removeInvalidParentheses("(a)())()")); // ["(a())()","(a)()()"]
console.log(removeInvalidParentheses(")(")); // [""]
console.log(removeInvalidParentheses("(r(()u)))")); // ["r(t)","r(t)u"]
console.log(removeInvalidParentheses("(v)")); // ["v"]
console.log(removeInvalidParentheses("(k))")); // ["k"]
console.log(removeInvalidParentheses("()")); // ["()"]
console.log(removeInvalidParentheses("(j))")); // ["j"]


