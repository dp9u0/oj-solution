/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let aCharCode = 'a'.charCodeAt(0);
  let tab = Array(26);
  let sl = s.length;
  for (let i = 0; i < sl; i++) {
    let index = s.charCodeAt(i) - aCharCode;
    if (tab[index] || tab[index] === 0) {
      tab[index] = sl;
    } else {
      tab[index] = i;
    }
  }

  let first = sl;
  for (let j = 0; j < tab.length; j++) {
    if (tab[j] === 0) {
      return 0;
    }
    if (tab[j]) {
      first = Math.min(first, tab[j]);
    }
  }
  return first === sl ? -1 : first;
};

/**
// TEST:
// console.log(firstUniqChar('leetcode'))
// console.log(firstUniqChar('cc'))
*/