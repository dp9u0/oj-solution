/*
 * @lc app=leetcode id=1640 lang=javascript
 *
 * [1640] Check Array Formation Through Concatenation
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let map = {};
    for (const p of pieces) {
        map[p[0]] = p;
    }
    let i = 0;
    while (i < arr.length) {
        let piece = map[arr[i]];
        if (!piece) return false;
        for (const val of piece) {
            if (arr[i] !== val) return false;
            i++;
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(canFormArray([15,88], [[88],[15]])); // true
console.log(canFormArray([49,18,16], [[16,18,49]])); // false
console.log(canFormArray([91,4,64,78], [[78],[4,64],[91]])); // true
