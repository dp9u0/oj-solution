/*
 * @lc app=leetcode id=2660 lang=javascript
 *
 * [2660] Determine the Winner of a Bowling Game
 */

// @lc code=start
/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let calcScore = (arr) => {
        let score = 0;
        for (let i = 0; i < arr.length; i++) {
            let double = (i >= 1 && arr[i - 1] === 10) || (i >= 2 && arr[i - 2] === 10);
            score += double ? 2 * arr[i] : arr[i];
        }
        return score;
    };
    let s1 = calcScore(player1);
    let s2 = calcScore(player2);
    return s1 > s2 ? 1 : s2 > s1 ? 2 : 0;
};
// @lc code=end

// TEST:
console.log(isWinner([5,10,3,2], [6,5,7,3])); // 1
console.log(isWinner([3,5,7,6], [8,10,10,2])); // 2
console.log(isWinner([2,3], [4,1])); // 0
