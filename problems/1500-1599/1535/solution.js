/*
 * @lc app=leetcode id=1535 lang=javascript
 *
 * [1535] Find the Winner of an Array Game
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let winner = arr[0];
    let streak = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > winner) {
            winner = arr[i];
            streak = 1;
        } else {
            streak++;
        }
        if (streak === k) return winner;
    }

    return winner;
};
// @lc code=end

// TEST:
console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2)); // 5
console.log(getWinner([3, 2, 1], 10)); // 3
console.log(getWinner([1, 9, 8, 2, 3, 7, 6, 4, 5], 3)); // 9
console.log(getWinner([1, 2], 1)); // 2
