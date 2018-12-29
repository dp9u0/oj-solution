/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let result = [];
  words.forEach(word => {
    if (/[qwertyuiop]/gi.test(word) + /[asdfghjkl]/gi.test(word) + /[zxcvbnm]/gi.test(word) === 1) { // 只有一个true
      result.push(word);
    }
  })
  return result;
};