/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
  let start = -1;
  let results = [];
  [...S, 'dummy'].forEach((s, index) => {
    if (s !== S[start]) {
      if (index - 1 - start > 1) {
        results.push([start, index - 1]);
      }
      start = index;
    }
  });
  return results;
};