/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  return s.trim() !== "" && (Number(s) === 0 || Boolean(Number(s)))
};