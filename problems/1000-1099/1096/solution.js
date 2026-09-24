/*
 * @lc app=leetcode.cn id=1096 lang=javascript
 *
 * [1096] 花括号展开 II
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  const n = expression.length;
  let i = 0;

  // seq: factor factor ... (concatenation, cartesian product of sets)
  const parseSeq = () => {
    let res = new Set(['']);
    while (i < n && expression[i] !== ',' && expression[i] !== '}') {
      const factor = parseFactor();
      const next = new Set();
      for (const a of res) for (const b of factor) next.add(a + b);
      res = next;
    }
    return res;
  };

  // factor: letter | '{' union '}'
  const parseFactor = () => {
    if (expression[i] === '{') {
      i++;
      const res = parseUnion();
      i++;
      return res;
    }
    const res = new Set([expression[i]]);
    i++;
    return res;
  };

  // union: seq (',' seq)*
  const parseUnion = () => {
    const res = parseSeq();
    while (i < n && expression[i] === ',') {
      i++;
      for (const s of parseSeq()) res.add(s);
    }
    return res;
  };

  return [...parseSeq()].sort();
};
// @lc code=end

// TEST:
console.log(braceExpansionII("{a,b}{c,{d,e}}")); // ["ac","ad","ae","bc","bd","be"]
console.log(braceExpansionII("{{a,z},a{b,c},{ab,z}}")); // ["a","ab","ac","z"]
console.log(braceExpansionII("a")); // ["a"]
console.log(braceExpansionII("{a,b}c{d,e}")); // ["acd","ace","bcd","bce"]
console.log(braceExpansionII("{a,{b,c}}d")); // ["ad","bd","cd"]
console.log(braceExpansionII("{{a,b},{c,d}}")); // ["a","b","c","d"]
