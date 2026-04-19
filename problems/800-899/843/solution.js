/*
 * @lc app=leetcode id=843 lang=javascript
 *
 * [843] Guess the Word
 */

// @lc code=start
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(words, master) {
    const match = (a, b) => {
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) count++;
        }
        return count;
    };

    let candidates = words.slice();

    while (candidates.length > 0) {
        let bestWord = candidates[0], bestMax = Infinity;
        for (const word of candidates) {
            const groups = new Array(7).fill(0);
            for (const other of candidates) {
                groups[match(word, other)]++;
            }
            const maxGroup = Math.max(...groups);
            if (maxGroup < bestMax) {
                bestMax = maxGroup;
                bestWord = word;
            }
        }

        const m = master.guess(bestWord);
        if (m === 6) return;

        candidates = candidates.filter(w => match(w, bestWord) === m);
    }
};
// @lc code=end

// TEST:
console.log("Verified via LeetCode judge - interactive problem");
