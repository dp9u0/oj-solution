/*
 * @lc app=leetcode id=950 lang=javascript
 *
 * [950] Reveal Cards In Increasing Order
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    const n = deck.length;
    const queue = [];

    for (let i = n - 1; i >= 0; i--) {
        if (queue.length > 0) {
            queue.unshift(queue.pop());
        }
        queue.unshift(deck[i]);
    }

    return queue;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(deckRevealedIncreasing([17,13,11,2,3,5,7]))); // [2,13,3,11,5,17,7]
console.log(JSON.stringify(deckRevealedIncreasing([1,1000]))); // [1,1000]
console.log(JSON.stringify(deckRevealedIncreasing([1]))); // [1]
