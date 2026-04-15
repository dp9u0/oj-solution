/*
 * @lc app=leetcode id=3273 lang=javascript
 *
 * [3273] Minimum Amount of Damage Dealt to Bob
 */

// @lc code=start
/**
 * @param {number} power
 * @param {number[]} damage
 * @param {number[]} health
 * @return {number}
 */
var minDamage = function(power, damage, health) {
    const n = damage.length;
    const enemies = [];
    for (let i = 0; i < n; i++) {
        const time = Math.ceil(health[i] / power);
        enemies.push({ dmg: damage[i], time });
    }

    // Sort by damage/time descending (compare cross-multiply to avoid division)
    enemies.sort((a, b) => b.dmg * a.time - a.dmg * b.time);

    let totalDmg = 0;
    let remainingDps = enemies.reduce((sum, e) => sum + e.dmg, 0);

    for (const e of enemies) {
        totalDmg += remainingDps * e.time;
        remainingDps -= e.dmg;
    }

    return totalDmg;
};
// @lc code=end

// TEST:
console.log(minDamage(4, [1,2,3,4], [4,5,6,8])); // 39
console.log(minDamage(1, [1,1,1,1], [1,2,3,4])); // 20
console.log(minDamage(8, [40], [59])); // 320
