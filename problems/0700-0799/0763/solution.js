/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const charEnds = new Map(); // 每个字母结束的位置
  const ends = new Map();
  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    charEnds.set(c, i);
  };
  for (const kvp of charEnds) {
    ends.set(kvp[1], kvp[0]);
  }
  const set = new Set();
  let start = 0;
  const results = [];
  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    set.add(c);
    const c2 = ends.get(i);
    if (c2) {
      set.delete(c);
    }
    if (set.size === 0) {
      results.push(i - start + 1);
      start = i + 1;
    }
  }
  return results;
};

// TEST:
let S, result;
S = 'ababcbacadefegdehijhklij'
result = partitionLabels(S);
console.log(result)