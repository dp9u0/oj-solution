/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var map = {};
  for (var i = 0; i < s.length; i++) {
    let keyS = `s${s[i]}`;
    let keyT = `t${t[i]}`;
    if (!map[keyS]) map[keyS] = t[i];
    if (!map[keyT]) map[keyT] = s[i];
    if (t[i] !== map[keyS] || s[i] !== map[keyT]) return false;
  }
  return true;
};