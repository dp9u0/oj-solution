/*
 * @lc app=leetcode id=3001 lang=javascript
 *
 * [3001] Minimum Moves to Capture The Queen
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
    // Check rook can capture in 1 move
    let rookOne = false;
    if (a === e) {
        // same row, bishop blocks if on same row between
        let blocked = (c === a && Math.min(b, f) < d && d < Math.max(b, f));
        if (!blocked) rookOne = true;
    }
    if (b === f) {
        // same col, bishop blocks if on same col between
        let blocked = (d === b && Math.min(a, e) < c && c < Math.max(a, e));
        if (!blocked) rookOne = true;
    }

    // Check bishop can capture in 1 move
    let bishopOne = false;
    if (Math.abs(c - e) === Math.abs(d - f)) {
        // same diagonal, rook blocks if on same diagonal between
        let rookOnDiag = (Math.abs(a - c) === Math.abs(b - d) && Math.abs(a - e) === Math.abs(b - f));
        let blocked = rookOnDiag && (Math.min(c, e) < a && a < Math.max(c, e));
        if (!blocked) bishopOne = true;
    }

    return (rookOne || bishopOne) ? 1 : 2;
};
// @lc code=end

// TEST:
console.log(minMovesToCaptureTheQueen(1,1,8,8,2,3)); // 2
console.log(minMovesToCaptureTheQueen(5,3,3,4,5,2)); // 1
console.log(minMovesToCaptureTheQueen(4,3,3,4,2,5)); // 1
console.log(minMovesToCaptureTheQueen(1,1,4,1,5,1)); // 2 (rook blocked by bishop)
