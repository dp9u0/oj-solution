/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let results = [];
  let indexesOfC = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      indexesOfC.push(i);
    }
  }
  let index = 0;
  let rightIndex = indexesOfC[0];
  let leftIndex = -1;
  for (let i = 0; i < S.length; i++) {
    if (rightIndex >= 0) {
      if (leftIndex >= 0) {
        results.push(Math.min(rightIndex - i, i - leftIndex));
      } else {
        results.push(rightIndex - i);
      }
    } else {
      results.push(i - leftIndex);
    }
    if (i === rightIndex) {
      leftIndex = rightIndex;
      index++;
      rightIndex = index === indexesOfC.length ? -1 : indexesOfC[index];
    }
  }
  return results;
};