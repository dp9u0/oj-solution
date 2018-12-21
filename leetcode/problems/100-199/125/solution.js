/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s) return true;
  s = s.replace(/[^A-Za-z0-9]/g, "").toLocaleLowerCase();
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start++] !== s[end--]) {
      return false;
    }
  }
  return true;
};


//TEST:
console.log(isPalindrome("race a car"))