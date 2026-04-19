/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let bsS = bsT = 0,
    indexS = S.length - 1,
    indexT = T.length - 1;
  while (indexS >= 0 || indexT >= 0) { // 直到遍历完所有字符
    // 找到 S 中可以比较的字符
    while (S[indexS] === '#' || bsS) {
      if (S[indexS] === '#') {
        bsS++;
      } else {
        bsS--;
      }
      indexS--;
    }
    // 找到 T 中可以比较的字符
    while (T[indexT] === '#' || bsT) {
      if (T[indexT] === '#') {
        bsT++;
      } else {
        bsT--;
      }
      indexT--;
    }
    // 比较
    if (S[indexS] !== T[indexT]) {
      return false;
    }
    indexS--;
    indexT--;
  }
  return indexS < 0 && indexT < 0;
};

/**
// TEST:
let result = backspaceCompare("ab##", "c#d#");
console.log(result);
result = backspaceCompare("a#b##", "c#d#")
console.log(result);
result = backspaceCompare("nzp#o#g","b#nzp#o#g");
console.log(result);
*/