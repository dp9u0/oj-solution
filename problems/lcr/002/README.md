# [LCR 002] 二进制求和

## Description


```md
https://leetcode.cn/problems/JFETK5/description/
* algorithms
* Easy (54.01%)
* Likes:    90
* Dislikes: -
* Testcase Example:  '"11"\n"10"'
给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。
输入为 非空 字符串且只包含数字 1 和 0。

示例 1：
输入: a = "11", b = "10"
输出: "101"
示例 2：
输入: a = "1010", b = "1011"
输出: "10101"

提示：
每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

注意：本题与主站 67 题相同：https://leetcode.cn/problems/add-binary/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given two binary strings `a` and `b`, compute their sum and output it as a binary string. Inputs are non-empty strings of `0`/`1`.

**Example 1:** `a = "11", b = "10"` → `"101"`
**Example 2:** `a = "1010", b = "1011"` → `"10101"`

**Constraints:** lengths up to 10^4, no leading zeros (unless `"0"`).

Note: same as LeetCode 67.

---

## Approach

Manual column addition from the least significant bit with a `carry`:

- Walk indices from the ends of `a` and `b` down to 0; `sum = bitA + bitB + carry`.
- Result bit `sum % 2`, carry `floor(sum / 2)`.
- Prepend bits to a result string; if a final carry remains, prepend `"1"`.

Complexity: `O(max(len))`.
