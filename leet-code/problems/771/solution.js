/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let jMap = {};
  let result = 0
  for (let index = 0; index < J.length; index++) {
    jMap[J[index]] = true;
  }

  for (let index2 = 0; index2 < S.length; index2++) {
    if (jMap[S[index2]]) {
      result++;
    }
  }
  return result;
};