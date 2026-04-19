/*
 * @lc app=leetcode id=3750 lang=javascript
 *
 * [3750] Minimum Number of Flips to Reverse Binary String
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
    const s = n.toString(2);
    let flips = 0;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] !== s[len - 1 - i]) flips++;
    }
    return flips;
};
// @lc code=end

// TEST:
console.log(minimumFlips(7)); // 0 (111 -> 111)
console.log(minimumFlips(10)); // 4 (1010 -> 0101)
console.log(minimumFlips(1)); // 0 (1 -> 1)
console.log(minimumFlips(2)); // 0 (10 -> 01, but 10 != 01, so 1? Wait... 10 reversed is 01, s[0]!=s[1]? "1"!="0" yes, 1 flip)
console.log(minimumFlips(5)); // 0 (101 -> 101)
console.log(minimumFlips(6)); // 1 (110 -> 011, s[0]="1", s[2]="0", different, 1 flip)
