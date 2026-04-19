/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let f = [];
  let sl = s.length;
  let pl = p.length;
  let flag = true;
  for (let i = 0; i <= sl; i++) {
    f[i] = f[i] || [];
    for (let j = 0; j <= pl; j++) {
      if (i + j === 0) {
        f[i][j] = true;
        continue;
      }
      let si = s[i - 1];
      let pj = p[j - 1];
      flag = flag && pj === '*';
      f[i][j] = pj === '*' ?
        flag ||
        (i > 0 && (f[i - 1][j - 1] || f[i - 1][j] || f[i][j - 1])) :
        i > 0 && (si === pj || pj === '?') && f[i - 1][j - 1];
    }
  }
  // console.log(f);
  return f[sl][pl];
};

/**
// TEST:
console.log(isMatch('abceb', '*a*b'));
console.log(isMatch('a', ''));
console.log(isMatch('aa', '*'));
console.log(isMatch('aa', 'a'));
console.log(isMatch('cb', '?a'));
console.log(isMatch('aa', 'aa'));
console.log(isMatch('a', 'a*'));
console.log(isMatch('a', 'a***'));
console.log(isMatch('ho', '**ho'));
*/