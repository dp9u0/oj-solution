/*
 * @lc app=leetcode id=1054 lang=javascript
 *
 * [1054] Distant Barcodes
 */

// @lc code=start
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    const count = new Map();
    for (const b of barcodes) count.set(b, (count.get(b) || 0) + 1);

    // Sort by frequency descending
    const entries = [...count.entries()].sort((a, b) => b[1] - a[1]);

    const result = new Array(barcodes.length);
    let idx = 0;

    // Fill even indices first, then odd indices
    for (const [val, freq] of entries) {
        for (let i = 0; i < freq; i++) {
            if (idx >= barcodes.length) idx = 1;
            result[idx] = val;
            idx += 2;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(rearrangeBarcodes([1,1,1,2,2,2])));        // [2,1,2,1,2,1] or similar
console.log(JSON.stringify(rearrangeBarcodes([1,1,1,1,2,2,3,3])));   // valid rearrangement
console.log(JSON.stringify(rearrangeBarcodes([1])));                   // [1]
console.log(JSON.stringify(rearrangeBarcodes([7,7,7,7,7,8,8,8,9,9]))); // valid rearrangement
