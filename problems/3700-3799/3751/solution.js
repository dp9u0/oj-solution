/*
 * @lc app=leetcode id=3751 lang=javascript
 *
 * [3751] Total Waviness of Numbers in Range I
 */

// @lc code=start
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let total = 0;
    for (let x = num1; x <= num2; x++) {
        const d = String(x).split('').map(Number);
        if (d.length < 3) continue;
        for (let i = 1; i < d.length - 1; i++) {
            if ((d[i] > d[i - 1] && d[i] > d[i + 1]) || (d[i] < d[i - 1] && d[i] < d[i + 1])) {
                total++;
            }
        }
    }
    return total;
};
// @lc code=end

// TEST:
console.log(totalWaviness(120, 130)); // 3
console.log(totalWaviness(198, 202)); // 3
console.log(totalWaviness(4848, 4848)); // 2
console.log(totalWaviness(1, 99)); // 0
console.log(totalWaviness(100, 100)); // 0
console.log(totalWaviness(121, 121)); // 1
