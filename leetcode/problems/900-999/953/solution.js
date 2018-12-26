/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const aCharCode = 'a'.charCodeAt(0)
var isAlienSorted = function (words, order) {
  let map = [];
  for (let i = 0; i < order.length; i++) {
    map[order.charCodeAt(i) - aCharCode] = i;
  }
  for (let i = 1; i < words.length; i++) {
    if (compare(words[i - 1], words[i], map) > 0) {
      return false;
    }
  }

  return true;
}

function compare(s1, s2, map) { // (-) if s1 < s2, 0 if equal, (+) if s1 > s2
  let n = s1.length,
    m = s2.length;
  for (let i = 0, j = 0; i < n && j < m; i++, j++) {
    let pos1 = map[s1.charCodeAt(i) - aCharCode];
    let pos2 = map[s2.charCodeAt(j) - aCharCode];
    if (pos1 !== pos2) {
      return pos1 - pos2;
    }
  }
  return n - m;
}