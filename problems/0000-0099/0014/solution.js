/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let count = -1;
  let common = true;
  while (common) {
    count++;
    const element = strs[0][count];
    if (!element) {
      common = false;
    }
    for (let index = 0; index < strs.length; index++) {
      common = common && (element === strs[index][count]);
    }
  }
  return strs[0].slice(0, count);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));