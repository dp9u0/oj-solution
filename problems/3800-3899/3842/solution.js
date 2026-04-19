/*
 * @lc app=leetcode id=3842 lang=javascript
 *
 * [3842] Toggle Light Bulbs
 */

// @lc code=start
/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function(bulbs) {
    const count = new Array(101).fill(0);
    for (const b of bulbs) count[b]++;
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (count[i] % 2 === 1) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(toggleLightBulbs([10,30,20,10]))); // [20,30]
console.log(JSON.stringify(toggleLightBulbs([100,100]))); // []
console.log(JSON.stringify(toggleLightBulbs([1]))); // [1]
console.log(JSON.stringify(toggleLightBulbs([1,1,1]))); // [1]
