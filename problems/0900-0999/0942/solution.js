/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let i = l = 0,
    length = r = S.length;
  result = [];
  while (i <= length) {
    if (S[i++] === 'D') {
      result.push(r--);
    } else {
      result.push(l++);
    }
  }
  return result;
};

/**
// TEST:
console.log(diStringMatch('IDID'))
console.log(diStringMatch('IDDDD'))
*/