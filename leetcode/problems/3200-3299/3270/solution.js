/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
  // 将数字转换为4位字符串
  const str1 = String(num1).padStart(4, '0');
  const str2 = String(num2).padStart(4, '0');
  const str3 = String(num3).padStart(4, '0');
  
  // 构建结果字符串
  let result = '';
  for (let i = 0; i < 4; i++) {
      result += Math.min(str1[i], str2[i], str3[i]);
  }
  
  // 转换为数字并返回
  return Number(result);
};
// @lc code=end
// TEST:
console.log(generateKey(1, 2, 3));
console.log(generateKey(987, 879, 798));
console.log(generateKey(1, 10, 1000)); // Expected output: 0
console.log(generateKey(1234, 5678, 9101)); // Expected output: 1234
console.log(generateKey(9999, 8888, 7777)); // Expected output: 7777
console.log(generateKey(4321, 1234, 5678)); // Expected output: 1234
console.log(generateKey(0, 0, 0)); // Expected output: 0