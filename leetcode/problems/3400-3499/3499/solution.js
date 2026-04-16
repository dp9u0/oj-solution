/*
 * @lc app=leetcode id=3499 lang=javascript
 *
 * [3499] Maximize Active Section with Trade I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    const t = '1' + s + '1';
    const n = t.length;
    const totalOnes = [...s].filter(c => c === '1').length;

    // Run-length encoding: groups alternate 1,0,1,0,...
    const groups = [];
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && t[j] === t[i]) j++;
        groups.push([t[i], j - i]);
        i = j;
    }

    // Trade: sacrifice a 1-block surrounded by 0-blocks → adjacent 0-blocks merge → fill merged 0-block
    // Net gain for sacrificing 1-block at group index k:
    //   left_zeros (groups[k-1][1]) + right_zeros (groups[k+1][1])
    // 1-blocks surrounded by 0-blocks are at even indices k where 2 <= k <= groups.length - 3

    let bestGain = 0;
    for (let k = 2; k <= groups.length - 3; k += 2) {
        const gain = groups[k - 1][1] + groups[k + 1][1];
        bestGain = Math.max(bestGain, gain);
    }

    return totalOnes + bestGain;
};
// @lc code=end

// TEST:
console.log(maxActiveSectionsAfterTrade("01")); // 1
console.log(maxActiveSectionsAfterTrade("0100")); // 4
console.log(maxActiveSectionsAfterTrade("1000100")); // 7
console.log(maxActiveSectionsAfterTrade("01010")); // 4
