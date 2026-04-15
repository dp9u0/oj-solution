/*
 * @lc app=leetcode id=2682 lang=javascript
 *
 * [2682] Find the Losers of the Circular Game
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const received = new Array(n + 1).fill(false);
    let cur = 1;
    received[1] = true;
    let step = 1;

    while (true) {
        cur = (cur + step * k - 1) % n + 1;
        if (received[cur]) break;
        received[cur] = true;
        step++;
    }

    const result = [];
    for (let i = 1; i <= n; i++) {
        if (!received[i]) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(circularGameLosers(5, 2))); // [4,5]
console.log(JSON.stringify(circularGameLosers(4, 4))); // [2,3,4]
console.log(JSON.stringify(circularGameLosers(2, 1))); // []
