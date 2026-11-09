# [4102] 统计有效子字符串 I

## Description


```md
https://leetcode.cn/problems/count-valid-substrings-i/description/
* algorithms
* Medium (47.58%)
* Dislikes: -
* Testcase Example:  '"abac"'
给你一个仅由字符 'a'、'b' 和 'c' 组成的字符串 s。
如果一个字符串不包含 "abc" 作为 子串 ，那么它被称为 有效的 。
返回 s 中 有效子串 的数量。起始或结束下标不同的子串分别计数。
子串 是字符串内连续的 非空 字符序列。

示例 1：
输入： s = "abac"
输出： 10
解释：
以下子串不包含 "abc" 作为子串：
s[0..0] = "a"
s[0..1] = "ab"
s[0..2] = "aba"
s[0..3] = "abac"
s[1..1] = "b"
s[1..2] = "ba"
s[1..3] = "bac"
s[2..2] = "a"
s[2..3] = "ac"
s[3..3] = "c"
因此，答案是 10。
示例 2：
输入： s = "abc"
输出： 5
解释：
以下子串不包含 "abc"​​​​​​​ 作为子串：
s[0..0] = "a"
s[0..1] = "ab"
s[1..1] = "b"
s[1..2] = "bc"
s[2..2] = "c"​​​​​​​
因此，答案是 5。
示例 3：
输入： s = "ac"
输出： 3
解释：
s 中的所有子串都不包含 "abc" 作为子串​​​​​​​。因此，答案是 3。

提示：
1 <= s.length <= 105​​​​​​​
s 仅由字符 'a'、'b' 和 'c' 组成。

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given a string s consisting only of the characters 'a', 'b' and 'c'.
A string is called valid if it does not contain "abc" as a substring.
Return the number of valid substrings of s. Substrings with different starting or ending indices are counted separately.

Example 1: s = "abac" -> 10 (all 10 substrings listed contain no "abc").
Example 2: s = "abc" -> 5 (the 5 substrings avoiding "abc").
Example 3: s = "ac" -> 3 (all substrings are valid).

Constraints:
1 <= s.length <= 10^5
s consists only of 'a', 'b' and 'c'.

## Approach

A substring [l, r] is valid iff it covers no occurrence of "abc". Scan right ends r while
maintaining lastEnd = the largest index j <= r where "abc" ends (s[j-2..j] == "abc").
Valid left bounds for right end r are l in [lastEnd-1, r] (an occurrence ending at j is
covered iff l <= j-2), i.e. count = r - lastEnd + 2, or r + 1 if no occurrence yet.
Answer fits in a double (n(n+1)/2 <= ~5e9). O(n).
