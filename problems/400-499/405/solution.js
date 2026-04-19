/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  let result = '';
  const hexs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  do {
    result = hexs[num & 15] + result;
    num >>>= 4;
  } while (num)
  return result;
};

/**
// TEST:
console.log(toHex(-1))
*/