/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function (s) {
  if (s.length == 0 || s[0] == '0') return 0;
  let numPre = 1,
    numPre2 = 1;
  for (let i = 0; i < s.length; i++) {
    let num = (s[i] === '0' ? 0 : numPre); // 以当前数字为一个decod解码
    if (s[i - 1] === '1' || (s[i] < '7' && s[i - 1] === '2')) { //当前数字和前一个数字作为一个解码单元
      num += numPre2;
    }
    // 更新迭代变量
    numPre2 = numPre;
    numPre = num;
  };
  return numPre;
}

var numDecodingsDP = function (s) {
  let f = [];
  let length = s.length
  for (let i = 0; i < length; i++) {
    f[i] = [];
    f[i][i] = (s[i] === '0' ? 0 : 1);
  }
  for (let d = 1; d < length; d++) {
    for (let j = d; j < length; j++) {
      let i = j - d;
      f[i][j] = f[i][i] * f[i + 1][j];
      if (s[i] === '1' || (s[i] === '2' && s[i + 1] < '7')) {
        f[i][j] += ((i + 2 > j) ? 1 : f[i + 2][j]);
      }
    }
  }
  return f[0][length - 1];
};

/**
// TEST:
numDecodings("227");
*/