/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]; //26个字母
  const charCodeA = 'a'.charCodeAt(0);
  const hashing = (str) => {
    return [...str.toLocaleLowerCase()].reduce((pre, cur) => {
      let primeIndex = (cur.charCodeAt(0) - charCodeA);
      if (primeIndex >= 0 && primeIndex <= 25) {
        pre *= prime[primeIndex];
      }
      return pre;
    }, 1);
  }
  let lpHash = hashing(licensePlate);
  let length = Infinity;
  let shortestCompletingWord = '';
  words.forEach(word => {
    let wordHash = hashing(word);
    if (wordHash % lpHash === 0 && word.length < length) {
      shortestCompletingWord = word;
      length = word.length;
    }
  });
  return shortestCompletingWord;
};