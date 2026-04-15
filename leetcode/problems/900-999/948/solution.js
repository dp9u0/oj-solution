/*
 * @lc app=leetcode id=948 lang=javascript
 *
 * [948] Bag of Tokens
 */

// @lc code=start
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b);
    let left = 0, right = tokens.length - 1;
    let score = 0, maxScore = 0;
    while (left <= right) {
        if (power >= tokens[left]) {
            power -= tokens[left++];
            score++;
            if (score > maxScore) maxScore = score;
        } else if (score > 0) {
            power += tokens[right--];
            score--;
        } else {
            break;
        }
    }
    return maxScore;
};
// @lc code=end

// TEST:
console.log(bagOfTokensScore([100], 50)); // 0
console.log(bagOfTokensScore([200,100], 150)); // 1
console.log(bagOfTokensScore([100,200,300,400], 200)); // 2
