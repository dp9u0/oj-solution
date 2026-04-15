/*
 * @lc app=leetcode id=3800 lang=javascript
 *
 * [3800] Minimum Cost to Make Two Binary Strings Equal
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} flipCost
 * @param {number} swapCost
 * @param {number} crossCost
 * @return {number}
 */
var minimumCost = function(s, t, flipCost, swapCost, crossCost) {
    let a = 0, b = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0' && t[i] === '1') a++;
      else if (s[i] === '1' && t[i] === '0') b++;
    }
    let pairs = Math.min(a, b);
    let same = Math.abs(a - b);
    let samePairs = Math.floor(same / 2);
    let sameSingle = same % 2;
    let pairCost = Math.min(swapCost, 2 * flipCost);
    let samePairCost = Math.min(2 * flipCost, crossCost + swapCost);
    return Number(BigInt(pairs) * BigInt(pairCost)
         + BigInt(samePairs) * BigInt(samePairCost)
         + BigInt(sameSingle) * BigInt(flipCost));
};
// @lc code=end

// TEST:
console.log(minimumCost("01000", "10111", 10, 2, 2));
console.log(minimumCost("001", "110", 2, 100, 100));
console.log(minimumCost("1010", "1010", 5, 5, 5));
