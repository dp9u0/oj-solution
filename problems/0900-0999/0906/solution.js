/*
 * @lc app=leetcode id=906 lang=javascript
 *
 * [906] Super Palindromes
 */

// @lc code=start
/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function (left, right) {
  const L = BigInt(left);
  const R = BigInt(right);

  const isPalindrome = (s) => {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }
    return true;
  };

  let count = 0;
  // 平方根 < 10^9（最多 9 位），回文根由前半部分唯一决定，枚举前半 h ∈ [1, 99999]
  for (let h = 1; h < 100000; h++) {
    const s = String(h);
    const roots = [
      s + s.slice(0, -1).split('').reverse().join(''), // 奇数长度回文
      s + s.split('').reverse().join(''), // 偶数长度回文
    ];
    for (const root of roots) {
      const p = BigInt(root);
      if (p >= 1000000000n) continue; // 平方根必须 < 10^9，否则平方超出范围
      const sq = p * p;
      if (sq >= L && sq <= R && isPalindrome(sq.toString())) count++;
    }
  }

  return count;
};
// @lc code=end

// TEST:
console.log(superpalindromesInRange('4', '1000')); // 4 -> 4, 9, 121, 484
console.log(superpalindromesInRange('1', '2')); // 1
console.log(superpalindromesInRange('1', '9')); // 3 -> 1, 4, 9
console.log(superpalindromesInRange('1', '121')); // 4 -> 1, 4, 9, 121
console.log(superpalindromesInRange('484', '999')); // 1 -> 484（676 = 26²，26 非回文）
console.log(superpalindromesInRange('1', '999999999999999999')); // 70 -> 全范围 [1, 10^18)，已与暴力法交叉验证
