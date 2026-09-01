/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const aCharCode = 'a'.charCodeAt(0);
  const results = [];
  const pl = p.length;
  const pW = new Array(26).fill(0);
  const sW = new Array(26).fill(0);
  [...p].forEach(char => {
    pW[char.charCodeAt(0) - aCharCode]++
  });
  [...s].forEach((char, index) => {
    if (index >= pl) {
      sW[s.charCodeAt(index - pl) - aCharCode]--;
    }
    sW[char.charCodeAt(0) - aCharCode]++
    if (pW.join() === sW.join()) {
      results.push(index + 1 - pl);
    }
  });
  return results;
};