/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let results = [];
  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <= 3; c++) {
        for (let d = 1; d <= 3; d++) {
          if (a + b + c + d == s.length) {
            let A = Number(s.substr(0, a));
            let B = Number(s.substr(a, b));
            let C = Number(s.substr(a + b, c));
            let D = Number(s.substr(a + b + c, d));
            if (A <= 255 && B <= 255 && C <= 255 && D <= 255) {
              let ans = A + "." + B + "." + C + "." + D;
              if (ans.length == s.length + 3) {
                results.push(ans);
              }
            }
          }
        }
      }
    }
  }
  return results;
};