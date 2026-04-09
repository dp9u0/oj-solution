/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  let left = 0, right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    const ch = s[left];
    while (left <= right && s[left] === ch) left++;
    while (left <= right && s[right] === ch) right--;
  }

  return right - left + 1;
};

// TEST:
console.log(minimumLength("ca")); // 2
console.log(minimumLength("cabaabac")); // 0
console.log(minimumLength("aabccabba")); // 3
console.log(minimumLength("a")); // 1
console.log(minimumLength("ab")); // 2
