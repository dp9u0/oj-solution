/*
 * @lc app=leetcode id=2227 lang=javascript
 *
 * [2227] Encrypt and Decrypt Strings
 */

// @lc code=start
/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
var Encrypter = function(keys, values, dictionary) {
  this.charMap = new Map();
  for (let i = 0; i < keys.length; i++) {
    this.charMap.set(keys[i], values[i]);
  }

  // Pre-encrypt all dictionary words and count
  this.encryptedCount = new Map();
  for (const word of dictionary) {
    const encrypted = this._encrypt(word);
    if (encrypted !== '') {
      this.encryptedCount.set(encrypted, (this.encryptedCount.get(encrypted) || 0) + 1);
    }
  }
};

Encrypter.prototype._encrypt = function(word) {
  let result = '';
  for (const c of word) {
    const mapped = this.charMap.get(c);
    if (mapped === undefined) return '';
    result += mapped;
  }
  return result;
};

/**
 * @param {string} word1
 * @return {string}
 */
Encrypter.prototype.encrypt = function(word1) {
  return this._encrypt(word1);
};

/**
 * @param {string} word2
 * @return {number}
 */
Encrypter.prototype.decrypt = function(word2) {
  return this.encryptedCount.get(word2) || 0;
};

/**
 * Your Encrypter object will be instantiated and called as such:
 * var obj = new Encrypter(keys, values, dictionary)
 * var param_1 = obj.encrypt(word1)
 * var param_2 = obj.decrypt(word2)
 */
// @lc code=end

// TEST:
const e = new Encrypter(['a','b','c','d'], ['ei','zf','ei','am'], ['abcd','acbd','adbc','badc','dacb','cadb','cbda','abad']);
console.log(e.encrypt('abcd')); // 'eizfeiam'
console.log(e.decrypt('eizfeiam')); // 2
