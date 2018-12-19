/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let solver = {
    results: [],
  };
  backtrace(solver, digits, digits.length, map);
  return solver.results;
};
function backtrace(solver, digits, length, map, current = 0, result = '') {
  if (current === length) {
    result && solver.results.push(result);
    return;
  }
  let currentLetters = map[Number(digits[current])];
  for (let index = 0; index < currentLetters.length; index++) {
    let letter = currentLetters[index];
    backtrace(solver, digits, length, map, current + 1, result + letter);
  }
}
const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
console.log(letterCombinations('23'));
console.log(letterCombinations(''));