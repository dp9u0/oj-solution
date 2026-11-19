/*
 * @lc app=leetcode.cn id=1215 lang=javascript
 *
 * [1215] 步进数
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function(low, high) {
    const res = [];
    if (low === 0) res.push(0); // single digit, no adjacent pair
    let queue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    while (queue.length) {
        const next = [];
        for (const v of queue) {
            if (v > high) continue; // appending digits only grows the number
            if (v >= low) res.push(v);
            const d = v % 10;
            if (d > 0) next.push(v * 10 + d - 1);
            if (d < 9) next.push(v * 10 + d + 1);
        }
        queue = next;
    }
    res.sort((a, b) => a - b);
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countSteppingNumbers(0, 21))); // [0,1,2,3,4,5,6,7,8,9,10,12,21]
console.log(JSON.stringify(countSteppingNumbers(10, 15))); // [10,12]
console.log(JSON.stringify(countSteppingNumbers(90, 101))); // [98,101] (90 not stepping: |9-0|=9)
console.log(JSON.stringify(countSteppingNumbers(0, 0))); // [0]
console.log(JSON.stringify(countSteppingNumbers(1, 1))); // [1]
