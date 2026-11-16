# [3571] 最短超级串 II

## Description


```md
https://leetcode.cn/problems/find-the-shortest-superstring-ii/description/
* algorithms
* Easy (59.66%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '"aba"\n"bab"'
给定 两 个字符串，s1 和 s2。返回同时包含 s1 和 s2 作为子串的 最短 字符串。如果有多个合法的答案，返回任意一个。
子串 是字符串中连续的字符序列。

示例 1：
输入：s1 = "aba", s2 = "bab"
输出："abab"
解释：
"abab" 是同时包含 "aba" 和 "bab" 作为子串的最短字符串。
示例 2：
输入：s1 = "aa", s2 = "aaa"
输出："aaa"
解释：
"aa" 已经被包含在 "aaa"  中，所以最短超级串是 "aaa"。

提示：
1 <= s1.length <= 100
1 <= s2.length <= 100
s1 和 s2 只包含小写英文字母。
Hint 1: Check for the maximum suffix of one string that matches a prefix of the other (in both directions) and merge accordingly.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given two strings `s1` and `s2`, return the **shortest** string that contains both `s1` and `s2` as substrings. If there are multiple valid answers, return any of them.

**Example 1:**
Input: s1 = "aba", s2 = "bab"
Output: "abab"

**Example 2:**
Input: s1 = "aa", s2 = "aaa"
Output: "aaa" (s1 is already a substring of s2)

**Constraints:**
- 1 <= s1.length <= 100
- 1 <= s2.length <= 100
- s1 and s2 consist of lowercase English letters.

## Approach

只有两个串,贪心最大重叠即最优:

1. 若一方包含另一方,直接返回较长者;
2. 否则分别计算 `suffix(s1)=prefix(s2)` 与 `suffix(s2)=prefix(s1)` 的最大重叠 `ov12`/`ov21`,合并为 `s1 + s2.slice(ov12)` 和 `s2 + s1.slice(ov21)`,取较短者(等长任取)。

时间 O(n²),空间 O(n)。
