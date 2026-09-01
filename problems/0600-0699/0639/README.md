# [639] Decode Ways II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/decode-ways-ii/description/)

* algorithms
* Hard (32.21%)
* Likes:    1678
* Dislikes: 825
* Testcase Example:  '"*"'

```md
A message containing letters from A-Z can be encoded into numbers using the following mapping:
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
In addition to the mapping above, an encoded message may contain the '*' character, which can represent any digit from '1' to '9' ('0' is excluded). For example, the encoded message "1*" may represent any of the encoded messages "11", "12", "13", "14", "15", "16", "17", "18", or "19". Decoding "1*" is equivalent to decoding any of the encoded messages it can represent.
Given a string s consisting of digits and '*' characters, return the number of ways to decode it.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:
Input: s = "*"
Output: 9
Explanation: The encoded message can represent any of the encoded messages "1", "2", "3", "4", "5", "6", "7", "8", or "9".
Each of these can be decoded to the strings "A", "B", "C", "D", "E", "F", "G", "H", and "I" respectively.
Hence, there are a total of 9 ways to decode "*".
Example 2:
Input: s = "1*"
Output: 18
Explanation: The encoded message can represent any of the encoded messages "11", "12", "13", "14", "15", "16", "17", "18", or "19".
Each of these encoded messages have 2 ways to be decoded (e.g. "11" can be decoded to "AA" or "K").
Hence, there are a total of 9 * 2 = 18 ways to decode "1*".
Example 3:
Input: s = "2*"
Output: 15
Explanation: The encoded message can represent any of the encoded messages "21", "22", "23", "24", "25", "26", "27", "28", or "29".
"21", "22", "23", "24", "25", and "26" have 2 ways of being decoded, but "27", "28", and "29" only have 1 way.
Hence, there are a total of (6 * 2) + (3 * 1) = 12 + 3 = 15 ways to decode "2*".

Constraints:
1
s[i] is a digit or '*'.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

一条包含字母 A-Z 的消息可以通过以下映射编码成数字：

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

要解码编码后的消息，所有数字必须分组后通过上述映射的反向映射还原为字母（可能存在多种分组方式）。例如，"11106" 可以映射为：

- "AAJF"，分组为 (1 1 10 6)
- "KJF"，分组为 (11 10 6)

注意分组 (1 11 06) 是无效的，因为 "06" 不能映射为 'F'，"6" 与 "06" 不同。

此外，编码消息中还可能包含字符 '*'，它可以表示 1 到 9 中的任意数字（不含 0）。例如编码消息 "1*" 可以表示 "11"、"12"、...、"19" 中的任意一个，解码 "1*" 等价于解码它可表示的所有编码消息。

给定一个由数字和 '*' 组成的字符串 s，返回解码它的方法数。由于答案可能非常大，返回对 10^9 + 7 取模的结果。

示例 1：
输入：s = "*"
输出：9
解释：可表示 "1"~"9"，分别解码为 "A"~"I"，共 9 种方式。

示例 2：
输入：s = "1*"
输出：18
解释：可表示 "11"~"19"，每个有 2 种解码方式（如 "11" → "AA" 或 "K"），共 9 × 2 = 18 种。

示例 3：
输入：s = "2*"
输出：15
解释：可表示 "21"~"29"，其中 "21"~"26" 有 2 种方式，"27"~"29" 只有 1 种，共 6×2 + 3×1 = 15 种。

约束：
- 1 <= s.length <= 10^5
- s[i] 是数字或 '*'

## 解题思路

动态规划（带通配符的解码方法数），是 91. Decode Ways 的升级版。

定义 dp[i] 为前 i 个字符的解码方法数，dp[0] = 1（空串）。转移考虑最后一段是 1 个字符还是 2 个字符：

1. **单字符 s[i-1] 的方法数 single**：
   - '*'：9 种（1~9）
   - '0'：0 种（无法单独解码）
   - 其他数字：1 种

2. **双字符 s[i-2..i-1] 组成有效两位数（10~26）的方法数 double**：
   - '*' + '*'：第一位 1~9、第二位 1~9 中构成的两位数在 10~26 内的有 1x（9 个）+ 2x 中 21~26（6 个），共 15 种
   - '*' + 数字 d：d 为 0~6 时首位可取 1 或 2（2 种）；d 为 7~9 时首位只能取 1（1 种）
   - 数字 c + '*'：c 为 '1' 时 9 种（11~19）；c 为 '2' 时 6 种（21~26）；否则 0 种
   - 数字 + 数字：构成的两位数在 10~26 内为 1 种，否则 0 种

转移方程：`dp[i] = (single × dp[i-1] + double × dp[i-2]) mod (10^9 + 7)`

答案为 dp[n]。用两个滚动变量代替数组，空间 O(1)，时间 O(n)。中途 dp 为 0 时后续自然保持为 0，无需特判。
