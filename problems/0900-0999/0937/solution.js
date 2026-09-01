/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let l = [], //letters
    d = [], //digit
    c = {}; // cache
  for (let v of logs) {
    if (v.split(" ")[1][0] >= '0' && v.split(" ")[1][0] <= '9') {
      d.push(v);
    } else {
      l.push(v);
    }
  }
  l.sort(function (a, b) {
    if (!c[a]) {
      c[a] = a.split(" ");
    }
    if (!c[b]) {
      c[b] = b.split(" ");
    }
    return c[a][1].localeCompare(c[b][1]) || c[a][2].localeCompare(c[b][2])
  })
  return [...l, ...d];
};