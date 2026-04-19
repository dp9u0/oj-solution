/*
 * @lc app=leetcode id=2844 lang=javascript
 *
 * [2844] Minimum Operations to Make a Special Number
 */

// @lc code=start
/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
    const n = num.length;
    const suffixes = ['00', '25', '50', '75'];
    let minOps = n; // delete all to get 0

    for (const suffix of suffixes) {
        let second = false;
        let ops = 0;
        for (let i = n - 1; i >= 0; i--) {
            if (!second) {
                if (num[i] === suffix[1]) second = true;
                else ops++;
            } else {
                if (num[i] === suffix[0]) {
                    minOps = Math.min(minOps, ops);
                    break;
                } else {
                    ops++;
                }
            }
        }
    }

    // Also consider keeping a single '0'
    for (let i = n - 1; i >= 0; i--) {
        if (num[i] === '0') {
            minOps = Math.min(minOps, n - 1);
            break;
        }
    }

    return minOps;
};
// @lc code=end

// TEST:
console.log(minimumOperations('2245047')); // 2
console.log(minimumOperations('2908305')); // 3
console.log(minimumOperations('10'));      // 1
