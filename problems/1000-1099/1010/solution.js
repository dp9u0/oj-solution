/*
 * @lc app=leetcode id=1010 lang=javascript
 *
 * [1010] Pairs of Songs With Total Durations Divisible by 60
 */

// @lc code=start
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const count = new Array(60).fill(0);
    let result = 0;
    for (const t of time) {
        const r = t % 60;
        const need = (60 - r) % 60;
        result += count[need];
        count[r]++;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(numPairsDivisibleBy60([30,20,150,100,40])); // 3
console.log(numPairsDivisibleBy60([60,60,60])); // 3
console.log(numPairsDivisibleBy60([15,45,45,15])); // 4
