/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let m = s.length,
    n = p.length;
  let f = [];
  for (let i = 0; i < m + 1; i++) {
    f[i] = [];
    for (let j = 0; j < n + 1; j++) {
      f[i][j] = false;
    }
  }
  f[0][0] = true;
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let s_1 = s[i - 1];
      let p_1 = p[j - 1];
      if (p_1 === '*') {
        let p_2 = p[j - 2];
        f[i][j] = f[i][j - 2] || (i > 0 && f[i - 1][j] && (s_1 === p_2 || p_2 === '.'));
      } else {
        f[i][j] = i > 0 && f[i - 1][j - 1] && (s_1 === p_1 || p_1 === '.');
      }
    }
  }
  // DEBUG: OUTPUT dp
  // console.log(dp);
  return f[m][n];
};

//TEST:
let s, p;

// s = "aabcbcbcaccbcaabc"
// p = ".*a*aa*.*b*.c*.*a*"
// console.log(isMatch(s, p));

// s = ""
// p = "c*c*"
// console.log(isMatch(s, p));

s = ""
p = ".*"
console.log(isMatch(s, p));

// s = ""
// p = "."
// console.log(isMatch(s, p));

// s = ""
// p = "c*"
// console.log(isMatch(s, p));

// s = "aa"
// p = "a"
// console.log(isMatch(s, p));

// s = "aa"
// p = "a*"
// console.log(isMatch(s, p));


// s = "ab"
// p = ".*"
// console.log(isMatch(s, p));

// s = "aab"
// p = "c*a*b"
// console.log(isMatch(s, p));

// s = "mississippi"
// p = "mis*is*p*."
// console.log(isMatch(s, p));


// s = "ab"
// p = ".*c"
// console.log(isMatch(s, p));

// s = "aaca"
// p = "ab*a*c*a"
// console.log(isMatch(s, p));