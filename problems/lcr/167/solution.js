/*
 * @lc app=leetcode.cn id=LCR 167 lang=javascript
 *
 * [LCR 167] 招式拆解 I
 */

// @lc code=start
/**
 * @param {string} arr
 * @return {number}
 */
var dismantlingAction = function(arr) {
    // Sliding window: maintain the longest window [left, right] without duplicates
    let lastIndex = {};
    let ans = 0;
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        const ch = arr[right];
        // If ch was seen before within the window, shrink from the left side
        if (lastIndex[ch] !== undefined && lastIndex[ch] >= left) {
            left = lastIndex[ch] + 1;
        }
        lastIndex[ch] = right;
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
function assertEqual(actual, expected, msg) {
    const pass = actual === expected;
    console.log(`${pass ? 'PASS' : 'FAIL'} ${msg}: got ${actual}, expected ${expected}`);
}

assertEqual(dismantlingAction('dbascDdad'), 6, 'dbascDdad');
assertEqual(dismantlingAction('KKK'), 1, 'KKK');
assertEqual(dismantlingAction('pwwkew'), 3, 'pwwkew');
assertEqual(dismantlingAction(''), 0, 'empty string');
assertEqual(dismantlingAction(' '), 1, 'single space');
assertEqual(dismantlingAction('abcabcbb'), 3, 'abcabcbb');
assertEqual(dismantlingAction('bbbbb'), 1, 'bbbbb');
assertEqual(dismantlingAction('au'), 2, 'au');
assertEqual(dismantlingAction('dvdf'), 3, 'dvdf');
assertEqual(dismantlingAction('abba'), 2, 'abba');
