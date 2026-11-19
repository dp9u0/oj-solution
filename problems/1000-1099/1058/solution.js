/*
 * @lc app=leetcode.cn id=1058 lang=javascript
 *
 * [1058] 最小化舍入误差以满足目标
 */

// @lc code=start
/**
 * @param {string[]} prices
 * @param {number} target
 * @return {string}
 */
var minimizeError = function(prices, target) {
    let sumFloor = 0;
    const fracs = [];
    for (const p of prices) {
        const dot = p.indexOf('.');
        const v = Number(p.slice(0, dot)) * 1000 + Number(p.slice(dot + 1)); // exact milliunits
        const f = Math.floor(v / 1000), r = v % 1000;
        sumFloor += f;
        if (r > 0) fracs.push(r); // fractional item: floor costs r, ceil costs 1000-r
    }
    const k = target - sumFloor; // exactly k items must be ceiled
    if (k < 0 || k > fracs.length) return "-1";
    fracs.sort((a, b) => b - a); // ceil the largest fracs: extra cost (1000-2r) smallest
    let err = 0;
    for (let i = 0; i < fracs.length; i++) {
        err += i < k ? 1000 - fracs[i] : fracs[i];
    }
    return (err / 1000).toFixed(3);
};
// @lc code=end

// TEST:
console.log(minimizeError(["0.700","2.800","4.900"], 8)); // "1.000"
console.log(minimizeError(["1.500","2.500","3.500"], 10)); // "-1" (k=4 > 3)
console.log(minimizeError(["1.500","2.500","3.500"], 9)); // "1.500"
console.log(minimizeError(["0.700","2.800"], 3)); // "0.900" (ceil 2.8 err 200 + floor 0.7 err 700)
console.log(minimizeError(["2.000","3.000"], 5)); // "0.000" (integers exact)
console.log(minimizeError(["2.000","3.000"], 4)); // "-1"
console.log(minimizeError(["1.001"], 1)); // "0.001" (floor only)
