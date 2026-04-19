/*
 * @lc app=leetcode id=3494 lang=javascript
 *
 * [3494] Find the Minimum Amount of Time to Brew Potions
 */

// @lc code=start
/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
    const n = skill.length, m = mana.length;

    // prefix[i] = sum of skill[0..i-1]
    const prefix = [0];
    for (let i = 0; i < n; i++) prefix.push(prefix[i] + skill[i]);

    let start = 0;
    for (let j = 1; j < m; j++) {
        let delay = 0;
        for (let i = 0; i < n; i++) {
            delay = Math.max(delay, prefix[i + 1] * mana[j - 1] - prefix[i] * mana[j]);
        }
        start += delay;
    }

    return start + prefix[n] * mana[m - 1];
};
// @lc code=end

// TEST:
console.log(minTime([1,5,2,4], [5,1,4,2])); // 110
console.log(minTime([1,1,1], [1,1,1])); // 5
console.log(minTime([1,2,3,4], [1,2])); // 21
console.log(minTime([1], [5])); // 5
console.log(minTime([3,2], [4,3])); // 21
