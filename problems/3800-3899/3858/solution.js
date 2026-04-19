/*
 * @lc app=leetcode id=3858 lang=javascript
 *
 * [3858] Minimum Bitwise OR From Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOR = function(grid) {
    let answer = 0, mask = 0;
    for (let bit = 17; bit >= 0; bit--) {
        const trial = mask | (1 << bit);
        if (grid.every(row => row.some(v => (v & trial) === 0))) {
            mask = trial;
        } else {
            answer |= (1 << bit);
        }
    }
    return answer;
};
// @lc code=end

// TEST:
console.log(minimumOR([[1,5],[2,4]])); // 3
console.log(minimumOR([[3,5],[6,4]])); // 5
console.log(minimumOR([[7,9,8]])); // 7
console.log(minimumOR([[1],[1]])); // 1
console.log(minimumOR([[1,2],[3,4],[5,6]])); // 3
