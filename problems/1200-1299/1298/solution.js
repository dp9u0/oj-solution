/*
 * @lc app=leetcode id=1298 lang=javascript
 *
 * [1298] Maximum Candies You Can Get from Boxes
 */

// @lc code=start
/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    const n = status.length;
    const haveBox = new Array(n).fill(false);
    const haveKey = new Array(n).fill(false);
    const opened = new Array(n).fill(false);

    for (const b of initialBoxes) haveBox[b] = true;

    let result = 0;
    let changed = true;
    while (changed) {
        changed = false;
        for (let i = 0; i < n; i++) {
            if (!haveBox[i] || opened[i]) continue;
            if (status[i] === 1 || haveKey[i]) {
                opened[i] = true;
                changed = true;
                result += candies[i];
                for (const k of keys[i]) haveKey[k] = true;
                for (const b of containedBoxes[i]) haveBox[b] = true;
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxCandies([1,0,1,0], [7,5,4,100], [[],[],[1],[]], [[1,2],[3],[],[]], [0])); // 16
console.log(maxCandies([1,0,0,0,0,0], [1,1,1,1,1,1], [[1,2,3,4,5],[],[],[],[],[]], [[1,2,3,4,5],[],[],[],[],[]], [0])); // 6
