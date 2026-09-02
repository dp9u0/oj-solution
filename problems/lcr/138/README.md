# [LCR 138] 有效数字

## Description


```md
https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/description/
* algorithms
* Medium (24.84%)
* Likes:    572
* Dislikes: -
* Testcase Example:  '"0"'
有效数字（按顺序）可以分成以下几个部分：
若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：
（可选）一个符号字符（'+' 或 '-'）
下述格式之一：

至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字


整数（按顺序）可以分成以下几个部分：
（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分有效数字列举如下：["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]
部分无效数字列举如下：["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]
给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true 。

示例 1：
输入：s = "0"
输出：true
示例 2：
输入：s = "e"
输出：false
示例 3：
输入：s = "."
输出：false

提示：
1 <= s.length <= 20
s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，空格 ' ' 或者点 '.' 。

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A valid number (in order) can be composed of:
- some spaces;
- a **decimal** or an **integer**;
- (optional) an `e` or `E` followed by an **integer**;
- some spaces.

Decimal (in order): (optional) sign `+`/`-`, then one of: digits then `.`; digits then `.` then digits; `.` then digits.

Integer (in order): (optional) sign, then at least one digit.

Examples valid: `"2","0089","-0.1","+3.14","4.","-.9","2e10","-90E3","3e+7","+6e-1","53.5e93","-123.456e789"`. Invalid: `"abc","1a","1e","e3","99e2.5","--6","-+3","95a54e53"`.

Return whether `s` is a valid number.

**Constraints:** `1 <= s.length <= 20`, chars are letters, digits, `+`, `-`, space, `.`.

---

## Approach

Scan the trimmed string with a simple state tracker:

- Trim leading/trailing spaces.
- Parse mantissa: optional `+/-`, then digits/dot per decimal grammar; must end having seen ≥1 digit and dot well-placed (forms `4.`, `.9`, `1.5`, `1`).
- If `e`/`E` present, it must be followed by a non-empty signed integer (optional `+/-` then ≥1 digit); nothing else after (except handled at end).

Implement a helper `scanNumber(str, allowDot)` returning parsed index + success. Validate mantissa then optional exponent.

Complexity: `O(n)`.
