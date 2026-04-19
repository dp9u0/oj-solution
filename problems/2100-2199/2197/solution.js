/*
 * @lc app=leetcode id=2197 lang=javascript
 *
 * [2197] Replace Non-Coprime Numbers in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const stack = [];

    for (const x of nums) {
        let cur = x;
        while (stack.length > 0) {
            const g = gcd(stack[stack.length - 1], cur);
            if (g === 1) break;
            const prev = stack.pop();
            cur = (prev / g) * cur;
        }
        stack.push(cur);
    }
    return stack;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(replaceNonCoprimes([6,4,3,2,7,6,2])));       // [12,7,6]
console.log(JSON.stringify(replaceNonCoprimes([2,2,1,1,3,3,3])));       // [2,1,1,3]
console.log(JSON.stringify(replaceNonCoprimes([1,1,1])));                // [1,1,1]
console.log(JSON.stringify(replaceNonCoprimes([6,6])));                  // [6]
console.log(JSON.stringify(replaceNonCoprimes([5,7,11])));               // [5,7,11]
