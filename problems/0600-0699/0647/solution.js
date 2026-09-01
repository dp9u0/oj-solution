/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const length = s.length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    result++;
    let l = i - 1, r = i + 1;
    while (l >= 0 && r < length && s[l--] === s[r++]) { result++; }
    l = i, r = i + 1;
    while (l >= 0 && r < length && s[l--] === s[r++]) { result++; }
  }
  return result;
};

// TEST:
let s, result;

s = 'abc';
result = countSubstrings(s);
console.log(result);

s = 'aaa';
result = countSubstrings(s);
console.log(result);