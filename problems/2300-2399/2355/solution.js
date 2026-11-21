/*
 * @lc app=leetcode.cn id=2355 lang=javascript
 *
 * [2355] 你能拿走的最大图书数量
 */

// @lc code=start
/**
 * @param {number[]} books
 * @return {number}
 */
var maximumBooks = function(books) {
    const n = books.length;
    const stack = [];
    const dp = new Float64Array(n);
    let best = 0;
    for (let i = 0; i < n; i++) {
        const v = books[i] - i;
        while (stack.length && books[stack[stack.length - 1]] - stack[stack.length - 1] >= v) {
            stack.pop();
        }
        const j = stack.length ? stack[stack.length - 1] : -1;
        const a = Math.max(j + 1, i - books[i]); // staircase floor (amounts hit 0)
        const L = i - a + 1;
        const run = L * books[i] - (L * (L - 1)) / 2;
        dp[i] = run + (j >= 0 && a === j + 1 ? dp[j] : 0);
        if (dp[i] > best) best = dp[i];
        stack.push(i);
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maximumBooks([8,5,2,7,9])); // 19
console.log(maximumBooks([7,0,3,4,5])); // 12
console.log(maximumBooks([8,2,3,7,3,4,0,1,4,3])); // 13
console.log(maximumBooks([1])); // 1
console.log(maximumBooks([0,0,0])); // 0
