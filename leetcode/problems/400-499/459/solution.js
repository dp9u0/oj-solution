/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, 2 * s.length - 1).indexOf(s) !== -1;
  // return kmp(s);
};

function kmp(str) {
  let i = 1,
    j = 0,
    n = str.length;
  let f = Array(n + 1).fill(0);
  while (i < n) {
    if (str[i] === str[j]) {
      f[++i] = ++j;
    } else if (j === 0) {
      i++;
    } else {
      j = f[j];
    }
  }
  return f[n] && f[n] % (n - f[n]) === 0;
}

/**
// TEST:
let s = "abab";
console.log(repeatedSubstringPattern(s));
s = "aba";
console.log(repeatedSubstringPattern(s));
*/