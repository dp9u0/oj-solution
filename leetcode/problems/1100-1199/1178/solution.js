/*
 * @lc app=leetcode id=1178 lang=javascript
 *
 * [1178] Number of Valid Words for Each Puzzle
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    // Count word bitmasks
    const freq = new Map();
    for (const word of words) {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            mask |= 1 << (word.charCodeAt(i) - 97);
        }
        freq.set(mask, (freq.get(mask) || 0) + 1);
    }

    const result = [];
    for (const puzzle of puzzles) {
        let puzzleMask = 0;
        for (let i = 0; i < 7; i++) {
            puzzleMask |= 1 << (puzzle.charCodeAt(i) - 97);
        }
        const firstBit = 1 << (puzzle.charCodeAt(0) - 97);

        // Enumerate all subsets of puzzleMask that include firstBit
        let count = 0;
        let subset = puzzleMask;
        while (true) {
            if (subset & firstBit) {
                count += freq.get(subset) || 0;
            }
            if (subset === 0) break;
            subset = (subset - 1) & puzzleMask;
        }

        result.push(count);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findNumOfValidWords(
    ["aaaa","asas","able","ability","actt","actor","access"],
    ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
))); // [1,1,3,2,4,0]
console.log(JSON.stringify(findNumOfValidWords(
    ["apple","pleas","please"],
    ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"]
))); // [0,1,3,2,0]
