/*
 * @lc app=leetcode id=1040 lang=javascript
 *
 * [1040] Moving Stones Until Consecutive II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
    stones.sort((a, b) => a - b);
    const n = stones.length;

    // Maximum moves: move one endpoint next to the other, then fill remaining gaps
    const maxMoves = Math.max(
        stones[n - 1] - stones[1] - (n - 2),
        stones[n - 2] - stones[0] - (n - 2)
    );

    // Minimum moves: sliding window of size n
    let minMoves = n;
    let j = 0;
    for (let i = 0; i < n; i++) {
        while (j < n && stones[j] - stones[i] + 1 <= n) j++;
        const stonesInWindow = j - i;
        if (stonesInWindow === n - 1 && stones[j - 1] - stones[i] + 1 === n - 1) {
            // Edge case: n-1 consecutive stones, need 2 moves for the last one
            minMoves = Math.min(minMoves, 2);
        } else {
            minMoves = Math.min(minMoves, n - stonesInWindow);
        }
    }

    return [minMoves, maxMoves];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(numMovesStonesII([7,4,9])));       // [1,2]
console.log(JSON.stringify(numMovesStonesII([6,5,4,3,10]))); // [2,3]
console.log(JSON.stringify(numMovesStonesII([1,2,3,4,10]))); // [2,3]
