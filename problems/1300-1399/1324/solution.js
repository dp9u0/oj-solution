/*
 * @lc app=leetcode id=1324 lang=javascript
 *
 * [1324] Print Words Vertically
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
  const words = s.split(' ');
  const maxLen = Math.max(...words.map(w => w.length));
  const result = [];
  for (let col = 0; col < maxLen; col++) {
    let row = '';
    for (const w of words) {
      row += col < w.length ? w[col] : ' ';
    }
    result.push(row.trimEnd());
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(printVertically("HOW ARE YOU"))); // ["HAY","ORO","WEU"]
console.log(JSON.stringify(printVertically("TO BE OR NOT TO BE"))); // ["TBONTB","OEROOE","   T"]
console.log(JSON.stringify(printVertically("CONTEST IS COMING"))); // ["CIC","OSO","N M","T I","E N","S G","T"]
console.log(JSON.stringify(printVertically("A BC"))); // ["AB"," C"]
console.log(JSON.stringify(printVertically("X"))); // ["X"]
