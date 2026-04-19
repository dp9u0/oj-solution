/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const f = Array.from({
    length: (word1.length + 1)
  }, (v, i) => {
    return Array.from({
      length: (word2.length + 1)
    }, (v, j) => {
      if (i === 0) {
        return j;
      }
      if (j === 0) {
        return i;
      }
      return Infinity;
    });
  });
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      f[i + 1][j + 1] = Math.min(
        f[i][j + 1] + 1, // DELETE
        f[i + 1][j] + 1, // INSERT
        f[i][j] + (word1[i] === word2[j] ? 0 : 1) // REPLACE(WHEN NOT EQUAL) OR DO NOTHING
      )
    }
  }
  // console.table(f);
  return f[word1.length][word2.length];
};