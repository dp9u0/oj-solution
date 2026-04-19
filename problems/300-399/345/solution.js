/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (!s || !s.length) {
    return s;
  }
  let chars = s.split('');
  let start = 0,
    end = s.length - 1;
  let vowels = "aeiouAEIOU";
  while (start < end) {
    while (start < end && vowels.indexOf(chars[start]) === -1) {
      start++;
    }
    while (start < end && vowels.indexOf(chars[end]) === -1) {
      end--;
    }
    [chars[end], chars[start]] = [chars[start], chars[end]]
    start++;
    end--;
  }
  return chars.join('');
};