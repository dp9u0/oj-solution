/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  let charCodeOfa = 'a'.charCodeAt(0);
  let line = 0,
    units = 0;
  for (let i = 0; i < S.length; i++) {
    let unit = widths[S.charCodeAt(i) - charCodeOfa];
    if (units + unit > 100) {
      line++;
      units = unit;
    } else {
      units += unit;
    }
  }
  return [units ? (line + 1) : line, units]
};