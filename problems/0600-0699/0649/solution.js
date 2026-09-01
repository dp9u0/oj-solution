/*
 * @lc app=leetcode id=649 lang=javascript
 *
 * [649] Dota2 Senate
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const n = senate.length;
    const radiant = [];
    const dire = [];

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') radiant.push(i);
        else dire.push(i);
    }

    while (radiant.length > 0 && dire.length > 0) {
        const r = radiant.shift();
        const d = dire.shift();
        if (r < d) {
            radiant.push(r + n);
        } else {
            dire.push(d + n);
        }
    }

    return radiant.length > 0 ? 'Radiant' : 'Dire';
};
// @lc code=end

// TEST:
console.log(predictPartyVictory("RD")); // Radiant
console.log(predictPartyVictory("RDD")); // Dire
console.log(predictPartyVictory("RRDDD")); // Radiant
