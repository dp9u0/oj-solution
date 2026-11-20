/*
 * @lc app=leetcode.cn id=1618 lang=javascript
 *
 * [1618] 找出适应屏幕的最大字号
 */

// @lc code=start
/**
 * // This is the FontInfo's API interface.
 * // You should not implement it, or speculate about its implementation
 * function FontInfo() {
 *
 *		@param {number} fontSize
 *		@param {char} ch
 *     	@return {number}
 *     	this.getWidth = function(fontSize, ch) {
 *      	...
 *     	};
 *
 *		@param {number} fontSize
 *     	@return {number}
 *     	this.getHeight = function(fontSize) {
 *      	...
 *     	};
 * };
 */
/**
 * @param {string} text
 * @param {number} w
 * @param {number} h
 * @param {number[]} fonts
 * @param {FontInfo} fontInfo
 * @return {number}
 */
var maxFont = function(text, w, h, fonts, fontInfo) {
    const fits = (size) => {
        if (fontInfo.getHeight(size) > h) return false;
        let width = 0;
        for (const ch of text) {
            width += fontInfo.getWidth(size, ch);
            if (width > w) return false; // early prune
        }
        return true;
    };
    let lo = 0, hi = fonts.length - 1, ans = -1;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (fits(fonts[mid])) {
            ans = fonts[mid];
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
// linear model: width = fontSize per char, height = fontSize
const fontInfo = {
    getWidth: (size, ch) => size,
    getHeight: (size) => size,
};
console.log(maxFont("helloworld", 80, 20, [6,8,10,12,14,16,18,24,36], fontInfo)); // 8 (linear mock: 10*8=80<=80)
console.log(maxFont("leetcode", 1000, 50, [1,2,4], fontInfo)); // 4
console.log(maxFont("easyquestion", 100, 100, [10,15,20,25], fontInfo)); // -1
