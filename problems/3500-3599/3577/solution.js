/*
 * @lc app=leetcode id=3577 lang=javascript
 *
 * [3577] Count the Number of Computer Unlocking Permutations
 */

// @lc code=start
/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
    const MOD = 1e9 + 7;
    const n = complexity.length;

    for (let i = 1; i < n; i++) {
        if (complexity[i] <= complexity[0]) return 0;
    }

    let result = 1;
    for (let i = 1; i <= n - 1; i++) {
        result = result * i % MOD;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countPermutations([1,2,3]));            // 2
console.log(countPermutations([3,3,3,4,4,4]));      // 0
console.log(countPermutations([1,5,3,4,2]));        // 24
console.log(countPermutations([2,1]));              // 0
console.log(countPermutations([1,2]));              // 1
console.log(countPermutations([5,6,7,8,9,10]));     // 120
