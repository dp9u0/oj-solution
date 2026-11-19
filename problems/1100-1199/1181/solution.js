/*
 * @lc app=leetcode.cn id=1181 lang=javascript
 *
 * [1181] 前后拼接
 */

// @lc code=start
/**
 * @param {string[]} phrases
 * @return {string[]}
 */
var beforeAndAfterPuzzles = function(phrases) {
    const words = phrases.map((p) => p.split(' '));
    const res = new Set();
    for (let i = 0; i < phrases.length; i++) {
        for (let j = 0; j < phrases.length; j++) {
            if (i === j) continue;
            const wi = words[i];
            if (wi[wi.length - 1] === words[j][0]) {
                const prefix = wi.slice(0, -1).join(' '); // may be '' for single-word phrase
                res.add(prefix ? prefix + ' ' + phrases[j] : phrases[j]);
            }
        }
    }
    return [...res].sort();
};
// @lc code=end

// TEST:
console.log(JSON.stringify(beforeAndAfterPuzzles(["writing code","code rocks"]))); // ["writing code rocks"]
console.log(JSON.stringify(beforeAndAfterPuzzles(["mission statement","a quick bite to eat","a chip off the old block","chocolate bar","mission impossible","a man on a mission","block party","eat my words","bar of soap"]))); // ["a chip off the old block party","a man on a mission impossible","a man on a mission statement","a quick bite to eat my words","chocolate bar of soap"]
console.log(JSON.stringify(beforeAndAfterPuzzles(["a","b","a"]))); // ["a"]
console.log(JSON.stringify(beforeAndAfterPuzzles(["ab ba","ba ab","ab ba"]))); // ["ab ba ab","ba ab ba"]
