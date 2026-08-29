/*
 * @lc app=leetcode id=3941 lang=javascript
 *
 * [3941] Password Strength
 */

// @lc code=start
/**
 * @param {string} password
 * @return {number}
 */
var passwordStrength = function(password) {
  const lower = new Set();
  const upper = new Set();
  const digit = new Set();
  const special = new Set();
  for (const ch of password) {
    if (ch >= 'a' && ch <= 'z') lower.add(ch);
    else if (ch >= 'A' && ch <= 'Z') upper.add(ch);
    else if (ch >= '0' && ch <= '9') digit.add(ch);
    else special.add(ch);
  }
  return lower.size + 2 * upper.size + 3 * digit.size + 5 * special.size;
};
// @lc code=end

// TEST:
console.log(passwordStrength('aA1!') === 11);
console.log(passwordStrength('bbB11#') === 11);
console.log(passwordStrength('a') === 1);
console.log(passwordStrength('abcdefghijklmnopqrstuvwxyz') === 26);
console.log(passwordStrength('ABCDEFGHIJKLMNOPQRSTUVWXYZ') === 52);
console.log(passwordStrength('0123456789!@#$') === 50);
console.log(passwordStrength('!@#$!@#$') === 20);
