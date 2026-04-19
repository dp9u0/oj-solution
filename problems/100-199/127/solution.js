/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let length = 1;
  let words = [beginWord];
  const wordDict = new Set(wordList);
  const reached = new Set(words);
  while (words.length) {
    const next = [];
    for (let v of words) {
      if (v === endWord) {
        return length;
      }
      const arr = v.split('');
      for (let i = 0; i < arr.length; i++) {
        for (let d = 0; d < 26; d++) {
          arr[i] = String.fromCharCode(97 + d);
          const nv = arr.join('');
          if (!reached.has(nv) && wordDict.has(nv)) {
            next.push(nv);
            reached.add(nv);
          }
          arr[i] = v[i];
        }
      }
    }
    words = next;
    length++;
  }

  return 0;
};