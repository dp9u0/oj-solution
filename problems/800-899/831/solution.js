/*
 * @lc app=leetcode id=831 lang=javascript
 *
 * [831] Masking Personal Information
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    if (s.includes('@')) {
      let [name, domain] = s.toLowerCase().split('@');
      return name[0] + '*****' + name[name.length - 1] + '@' + domain;
    }
    let digits = s.replace(/[^0-9]/g, '');
    let local = digits.slice(-4);
    let countryLen = digits.length - 10;
    if (countryLen === 0) return '***-***-' + local;
    return '+' + '*'.repeat(countryLen) + '-***-***-' + local;
};
// @lc code=end

// TEST:
console.log(maskPII("LeetCode@LeetCode.com"));
console.log(maskPII("AB@qq.com"));
console.log(maskPII("1(234)567-890"));
