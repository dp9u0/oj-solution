/**
 * @param {number[]} nums
 * @return {number}
 */
var scoreDifference = function(nums) {
    // activePlayer: 0 = player 1, 1 = player 2
    let activePlayer = 0;
    const scores = [0, 0];

    for (let i = 0; i < nums.length; i++) {
        // Rule 1: if nums[i] is odd, swap
        if (nums[i] % 2 !== 0) {
            activePlayer = 1 - activePlayer;
        }
        // Rule 2: every 6th game (index 5, 11, 17...), swap
        if (i % 6 === 5) {
            activePlayer = 1 - activePlayer;
        }
        // Active player gains points
        scores[activePlayer] += nums[i];
    }

    return scores[0] - scores[1];
};

// TEST:
console.log(scoreDifference([1, 2, 3])); // Expected: 0
console.log(scoreDifference([2, 4, 2, 1, 2, 1])); // Expected: 4
console.log(scoreDifference([1])); // Expected: -1
console.log(scoreDifference([2])); // Expected: 2
console.log(scoreDifference([1, 1, 1, 1, 1, 1])); // Expected: vary
