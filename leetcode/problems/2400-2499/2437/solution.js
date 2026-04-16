/*
 * @lc app=leetcode id=2437 lang=javascript
 *
 * [2437] Number of Valid Clock Times
 */

// @lc code=start
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    const match = (pattern, val) => {
        const s = val.toString().padStart(2, '0');
        return (pattern[0] === '?' || pattern[0] === s[0]) &&
               (pattern[1] === '?' || pattern[1] === s[1]);
    };
    const hh = time.slice(0, 2);
    const mm = time.slice(3, 5);
    let count = 0;
    for (let h = 0; h < 24; h++) {
        if (!match(hh, h)) continue;
        for (let m = 0; m < 60; m++) {
            if (match(mm, m)) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countTime('?5:00')); // 2
console.log(countTime('0?:0?')); // 100
console.log(countTime('??:??')); // 1440
