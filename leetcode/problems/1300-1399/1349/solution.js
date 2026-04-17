/*
 * @lc app=leetcode id=1349 lang=javascript
 *
 * [1349] Maximum Students Taking Exam
 */

// @lc code=start
/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function(seats) {
    const m = seats.length, n = seats[0].length;
    const fullMask = (1 << n) - 1;

    // broken[i] = bitmask of broken seats in row i
    const broken = [];
    for (let i = 0; i < m; i++) {
        let mask = 0;
        for (let j = 0; j < n; j++) {
            if (seats[i][j] === '#') mask |= (1 << j);
        }
        broken.push(mask);
    }

    const popcount = (x) => {
        let c = 0;
        while (x) { c++; x &= x - 1; }
        return c;
    };

    // Check if a mask has no adjacent bits
    const isValidRow = (mask) => (mask & (mask >> 1)) === 0;

    // Get all valid masks for a row
    const getValidMasks = (row) => {
        const masks = [];
        for (let mask = 0; mask <= fullMask; mask++) {
            if ((mask & broken[row]) === 0 && isValidRow(mask)) {
                masks.push(mask);
            }
        }
        return masks;
    };

    // DP
    let prev = new Map();
    const row0Masks = getValidMasks(0);
    for (const mask of row0Masks) {
        prev.set(mask, popcount(mask));
    }

    for (let row = 1; row < m; row++) {
        const currMasks = getValidMasks(row);
        const curr = new Map();
        for (const mask of currMasks) {
            let best = 0;
            for (const [prevMask, prevCount] of prev) {
                // Check diagonal constraints
                if ((mask & (prevMask << 1)) === 0 && (mask & (prevMask >> 1)) === 0) {
                    best = Math.max(best, prevCount);
                }
            }
            curr.set(mask, best + popcount(mask));
        }
        prev = curr;
    }

    let ans = 0;
    for (const [, count] of prev) {
        ans = Math.max(ans, count);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxStudents([["#",".","#","#",".","#"],[".","#","#","#","#","."],["#",".","#","#",".","#"]]));  // 4
console.log(maxStudents([[".","#"],["#","#"],["#","."],["#","#"],[".","#"]]));  // 3
console.log(maxStudents([[".","#"],["#","#"],["#","."],["#","#"],[".","#"]]));  // 3
console.log(maxStudents([["#",".",".",".","#"],[".","#",".","#","."],[".",".","#",".","."],[".","#",".","#","."],["#",".",".",".","#"]]));  // 10
console.log(maxStudents([["."]]));  // 1
console.log(maxStudents([["#"]]));  // 0
console.log(maxStudents([[".",".","."],[".",".","."]]));  // 4
