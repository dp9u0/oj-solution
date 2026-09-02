# [LCR 165] 解密数字

## Description


```md
https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/description/
* algorithms
* Medium (51.10%)
* Likes:    629
* Dislikes: -
* Testcase Example:  '216612'
现有一串神秘的密文 ciphertext，经调查，密文的特点和规则如下：
密文由非负整数组成
数字 0-25 分别对应字母 a-z
请根据上述规则将密文 ciphertext 解密为字母，并返回共有多少种解密结果。


示例 1：
输入：ciphertext = 216612
输出：6
解释：216612 解密后有 6 种不同的形式，分别是 "cbggbc"，"vggbc"，"vggm"，"cbggm"，"cqgbc" 和 "cqgm"

提示：
0 <= ciphertext < 231

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

There is a mysterious ciphertext `ciphertext`. Its features and rules:
- The ciphertext consists of non-negative integers;
- Digits `0-25` correspond to letters `a-z`.

Decrypt `ciphertext` into letters per the rules above and return how many distinct decryptions exist.

**Example 1:** `ciphertext = 216612` → `6` (`cbggbc`, `vggbc`, `vggm`, `cbggm`, `cqgbc`, `cqgm`)

**Constraints:** `0 <= ciphertext < 2^31`.

---

## Approach

Decode by splitting the digit string into chunks of 1 or 2 digits, each chunk being a value in `0..25` (a 2-digit chunk must be a valid value `10..25`, i.e. no leading zero). Count distinct ways — classic DP:

Let `s` be the decimal string. `dp[i]` = number of decodings of `s[0..i-1]`.
- `dp[0] = 1`.
- For each `i`, taking the last single digit `s[i-1]` always valid → add `dp[i-1]`.
- If `i >= 2` and the two digits `s[i-2..i-1]` form a number in `10..25`, also add `dp[i-2]`.

Answer is `dp[s.length]`.

Complexity: `O(digits)` time, `O(1)` space (rolling).
