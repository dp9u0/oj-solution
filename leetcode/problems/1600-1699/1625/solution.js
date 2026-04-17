/*
 * @lc app=leetcode id=1625 lang=javascript
 *
 * [1625] Lexicographically Smallest String After Applying Operations
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    const n = s.length;
    const visited = new Set();
    const queue = [s];
    visited.add(s);
    let ans = s;

    while (queue.length > 0) {
        const cur = queue.shift();
        if (cur < ans) ans = cur;

        // Add a to odd indices
        let added = '';
        for (let i = 0; i < n; i++) {
            if (i % 2 === 1) {
                added += String((parseInt(cur[i]) + a) % 10);
            } else {
                added += cur[i];
            }
        }
        if (!visited.has(added)) {
            visited.add(added);
            queue.push(added);
        }

        // Rotate right by b
        const rotated = cur.slice(n - b) + cur.slice(0, n - b);
        if (!visited.has(rotated)) {
            visited.add(rotated);
            queue.push(rotated);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(findLexSmallestString("5525", 9, 2));   // "2050"
console.log(findLexSmallestString("74", 5, 1));     // "24"
console.log(findLexSmallestString("0011", 4, 2));   // "0011"
console.log(findLexSmallestString("1234", 1, 1));   // ?
console.log(findLexSmallestString("10", 1, 1));     // "01"
