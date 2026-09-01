/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map1 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const map2 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const map3 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const map4 = ['', 'M', 'MM', 'MMM'];
  let result = '';
  result += map4[~~(num / 1000)];
  num %= 1000;
  result += map3[~~(num / 100)];
  num %= 100;
  result += map2[~~(num / 10)];
  num %= 10;
  result += map1[~~(num / 1)];
  return result;
};