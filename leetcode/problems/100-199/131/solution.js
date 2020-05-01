/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let results = [];
  backtrace(s, 0, [], results);
  return results;
};

/**
 * backtrace
 * @param {string} s source string
 * @param {number} index current index
 * @param {string[]} result current solve result
 * @param {string[][]} results all validate result
 */
const backtrace = (s, index, result, results) => {
  if (index === s.length) {
    results.push([...result]);
  }
  for (let i = index; i < s.length; i++) {
    let part = s.slice(index, i + 1);
    if (isPalindrome(part)) {
      result.push(part);
      backtrace(s, i + 1, result, results);
      result.pop();
    }
  }
}

const isPalindrome = function (s) {
  if (!s) return true;
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start++] !== s[end--]) {
      return false;
    }
  }
  return true;
};

// TEST:
console.log(partition('aab'));
