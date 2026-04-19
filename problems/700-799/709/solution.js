/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  var arr = str.split("");
  var charCodeOfA = 'A'.charCodeAt();
  var charCodeOfZ = 'Z'.charCodeAt();
  var difference = charCodeOfA - 'a'.charCodeAt();
  var curChar;

  for (var i = 0; i < arr.length; i++) {
    curChar = arr[i].charCodeAt();
    arr[i] = (curChar <= charCodeOfZ && curChar >= charCodeOfA) ? String.fromCharCode(curChar - difference) : arr[i];
  }

  str = arr.join("");
  return str;
};