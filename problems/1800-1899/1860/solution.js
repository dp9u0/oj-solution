/*
 * @lc app=leetcode id=1860 lang=javascript
 *
 * [1860] Incremental Memory Leak
 */

// @lc code=start
/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function(memory1, memory2) {
    let i = 1;
    while (memory1 >= i || memory2 >= i) {
        if (memory1 >= memory2) {
            memory1 -= i;
        } else {
            memory2 -= i;
        }
        i++;
    }
    return [i, memory1, memory2];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(memLeak(2, 2)));       // [3,1,0]
console.log(JSON.stringify(memLeak(8, 11)));      // [6,0,4]
console.log(JSON.stringify(memLeak(0, 0)));       // [1,0,0]
console.log(JSON.stringify(memLeak(1, 0)));       // [2,0,0]
console.log(JSON.stringify(memLeak(100, 100)));   // simulate
console.log(JSON.stringify(memLeak(0, 10)));      // simulate
