/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let aCharCode = 'a'.charCodeAt(0);
  let f = [];
  for (let i = 0; i < s.length; i++) {
    let keyS = s.charCodeAt(i) - aCharCode;
    let keyT = t.charCodeAt(i) - aCharCode;
    f[keyS] = (f[keyS] || 0) + 1;
    f[keyT] = (f[keyT] || 0) - 1;
  }
  for (let val of f) {
    if (val) return false;
  }
  return true;
}