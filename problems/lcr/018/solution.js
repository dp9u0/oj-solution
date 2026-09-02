/*
 * @lc app=leetcode.cn id=LCR 018 lang=javascript
 *
 * [LCR 018] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlnum(ch) {
        return /[a-zA-Z0-9]/.test(ch);
    }
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        // 跳过非字母数字
        while (left < right && !isAlnum(s[left])) left++;
        while (left < right && !isAlnum(s[right])) right--;
        if (left >= right) break;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
};
// @lc code=end

// TEST:
// 示例 1: "A man, a plan, a canal: Panama" -> true
console.log(isPalindrome("A man, a plan, a canal: Panama") === true);

// 示例 2: "race a car" -> false
console.log(isPalindrome("race a car") === false);

// 空串(题意有效) -> true
console.log(isPalindrome("") === true);

// 纯标点(过滤后空) -> true
console.log(isPalindrome(".,") === true);

// 单字符 -> true
console.log(isPalindrome("a") === true);

// 数字参与: "0P" -> false (0 vs p 不同)
console.log(isPalindrome("0P") === false);

// 数字回文: "1a2a1" -> true
console.log(isPalindrome("1a2a1") === true);

// 大小写混合回文: "AbBa" -> true
console.log(isPalindrome("AbBa") === true);

// 含空格标点回文: "Able was I ere I saw Elba" -> true
console.log(isPalindrome("Able was I ere I saw Elba") === true);

// 非回文字母段: "hello" -> false
console.log(isPalindrome("hello") === false);

// 仅空格: "   " -> true
console.log(isPalindrome("   ") === true);
