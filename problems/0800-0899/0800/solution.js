/*
 * @lc app=leetcode.cn id=800 lang=javascript
 *
 * [800] 相似 RGB 颜色
 */

// @lc code=start
/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function(color) {
    // per channel, the closest "XX" value is the multiple of 17 nearest to v
    const best = v => Math.max(0, Math.min(15, Math.round(v / 17)));
    const toXX = x => x.toString(16).repeat(2);

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return '#' + toXX(best(r)) + toXX(best(g)) + toXX(best(b));
};
// @lc code=end

// TEST:
console.log(similarRGB("#09f166")); // "#11ee66"
console.log(similarRGB("#4e3fe1")); // "#5544dd"
console.log(similarRGB("#000000")); // "#000000"
console.log(similarRGB("#ffffff")); // "#ffffff"
console.log(similarRGB("#010101")); // "#000000"
