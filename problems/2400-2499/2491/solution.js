/*
 * @lc app=leetcode id=2491 lang=javascript
 *
 * [2491] Divide Players Into Teams of Equal Skill
 */

// @lc code=start
/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a, b) => a - b);
    const n = skill.length;
    const teamSum = skill[0] + skill[n - 1];
    let chemistry = 0;

    for (let i = 0; i < n / 2; i++) {
        const pairSum = skill[i] + skill[n - 1 - i];
        if (pairSum !== teamSum) return -1;
        chemistry += skill[i] * skill[n - 1 - i];
    }

    return chemistry;
};
// @lc code=end

// TEST:
console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
// Expected: 22

console.log(dividePlayers([3, 4]));
// Expected: 12

console.log(dividePlayers([1, 1, 2, 3]));
// Expected: -1
