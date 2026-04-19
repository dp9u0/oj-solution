/*
 * @lc app=leetcode id=676 lang=javascript
 *
 * [676] Implement Magic Dictionary
 */

// @lc code=start

var MagicDictionary = function() {
  this.dict = {};
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  this.dict = {};
  for (const word of dictionary) {
    const len = word.length;
    if (!this.dict[len]) this.dict[len] = [];
    this.dict[len].push(word);
  }
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  const candidates = this.dict[searchWord.length] || [];
  for (const word of candidates) {
    let diff = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== searchWord[i]) diff++;
      if (diff > 1) break;
    }
    if (diff === 1) return true;
  }
  return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

// TEST:
const md = new MagicDictionary();
md.buildDict(['hello', 'leetcode']);
console.log(md.search('hello'));    // false
console.log(md.search('hhllo'));    // true
console.log(md.search('hell'));     // false
console.log(md.search('leetcoded')); // false
