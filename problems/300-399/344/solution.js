/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  let end = s.length;
  let result = '';
  while (end) {
    result += s[--end];
  }
  return result;
};

/**
// TEST: 
console.log(reverseString('hello'))
*/