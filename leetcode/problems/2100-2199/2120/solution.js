/*
 * @lc app=leetcode id=2120 lang=javascript
 *
 * [2120] Execution of All Suffix Instructions Staying in a Grid
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    let m = s.length;
    let dirs = { 'L': [0,-1], 'R': [0,1], 'U': [-1,0], 'D': [1,0] };
    let result = [];
    for (let i = 0; i < m; i++) {
        let r = startPos[0], c = startPos[1];
        let count = 0;
        for (let j = i; j < m; j++) {
            let [dr, dc] = dirs[s[j]];
            r += dr;
            c += dc;
            if (r < 0 || r >= n || c < 0 || c >= n) break;
            count++;
        }
        result.push(count);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(executeInstructions(3, [0,1], "RRDDLU"))); // [1,5,4,3,1,0]
console.log(JSON.stringify(executeInstructions(2, [1,1], "LURD"))); // [4,1,0,0]
console.log(JSON.stringify(executeInstructions(1, [0,0], "LRUD"))); // [0,0,0,0]
