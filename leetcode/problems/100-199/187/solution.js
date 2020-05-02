/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let length = s.length;
  let result = [];
  let map = new Map();
  for (let i = 0; i <= length - 10; i++) {
    let sub = s.slice(i, i + 10);
    let c = map.get(sub) || 0;
    if (c === 1) {
      result.push(sub);
    }
    map.set(sub, c + 1);
  }
  return result;
};


// TEST:
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
console.log(findRepeatedDnaSequences('AAAAAAAAAAA'));
