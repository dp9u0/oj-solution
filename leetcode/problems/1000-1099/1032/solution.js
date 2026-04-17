/*
 * @lc app=leetcode id=1032 lang=javascript
 *
 * [1032] Stream of Characters
 */

// @lc code=start
/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.root = {};
  this.maxLen = 0;
  for (const word of words) {
    let node = this.root;
    for (let i = word.length - 1; i >= 0; i--) {
      const c = word[i];
      if (!node[c]) node[c] = {};
      node = node[c];
    }
    node['#'] = true;
    this.maxLen = Math.max(this.maxLen, word.length);
  }
  this.stream = [];
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.stream.push(letter);
  if (this.stream.length > this.maxLen) this.stream.shift();
  let node = this.root;
  for (let i = this.stream.length - 1; i >= 0; i--) {
    const c = this.stream[i];
    if (!node[c]) return false;
    node = node[c];
    if (node['#']) return true;
  }
  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
// @lc code=end

// TEST:
const sc = new StreamChecker(["cd","f","kl"]);
console.log(sc.query('a')); // false
console.log(sc.query('b')); // false
console.log(sc.query('c')); // false
console.log(sc.query('d')); // true
console.log(sc.query('e')); // false
console.log(sc.query('f')); // true
console.log(sc.query('g')); // false
console.log(sc.query('k')); // false
console.log(sc.query('l')); // true
