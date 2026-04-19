/*
 * @lc app=leetcode id=781 lang=javascript
 *
 * [781] Rabbits in Forest
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const count = new Map();
    for (const a of answers) count.set(a, (count.get(a) || 0) + 1);

    let ans = 0;
    for (const [x, c] of count) {
        const groupSize = x + 1;
        const groups = Math.ceil(c / groupSize);
        ans += groups * groupSize;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(numRabbits([1,1,2]));        // 5
console.log(numRabbits([10,10,10]));     // 11
console.log(numRabbits([0,0,1,1,1]));    // 6
console.log(numRabbits([1,0,1,0]));      // 4
