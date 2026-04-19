/*
 * @lc app=leetcode id=2299 lang=javascript
 *
 * [2299] Strong Password Checker II
 */

// @lc code=start
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  if (password.length < 8) return false;
  const special = new Set('!@#$%^&*()-+');
  let hasLower = false, hasUpper = false, hasDigit = false, hasSpecial = false;
  for (let i = 0; i < password.length; i++) {
    const ch = password[i];
    if (i > 0 && ch === password[i - 1]) return false;
    if (ch >= 'a' && ch <= 'z') hasLower = true;
    else if (ch >= 'A' && ch <= 'Z') hasUpper = true;
    else if (ch >= '0' && ch <= '9') hasDigit = true;
    else if (special.has(ch)) hasSpecial = true;
  }
  return hasLower && hasUpper && hasDigit && hasSpecial;
};
// @lc code=end

// TEST:
console.log(strongPasswordCheckerII("IloveLe3tcode!")); // true
console.log(strongPasswordCheckerII("Me+You--IsMyDream")); // false
console.log(strongPasswordCheckerII("1aB!")); // false
console.log(strongPasswordCheckerII("Aa1!Aa1!")); // true
