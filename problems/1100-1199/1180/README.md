# [1180] 统计只含单一字母的子串

## Description


```md
https://leetcode.cn/problems/count-substrings-with-only-one-distinct-letter/description/
* algorithms
* Easy (80.81%)
* Likes:    39
* Dislikes: -
* Testcase Example:  '"aaaba"'
给你一个字符串 s，返回 只含 单一字母 的子串个数 。
示例 1：
输入： s = "aaaba"
输出： 8
解释： 只含单一字母的子串分别是 "aaa"， "aa"， "a"， "b"。
"aaa" 出现 1 次。
"aa" 出现 2 次。
"a" 出现 4 次。
"b" 出现 1 次。
所以答案是 1 + 2 + 4 + 1 = 8。
示例 2:
输入： s = "aaaaaaaaaa"
输出： 55

提示：
1 <= s.length <= 1000
s[i] 仅由小写英文字母组成
Hint 1: What if we divide the string into substrings containing only one distinct character with maximal lengths?
Hint 2: Now that you have sub-strings with only one distinct character, Try to come up with a formula that counts the number of its sub-strings.
Hint 3: Alternatively, Observe that the constraints are small so you can use brute force.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a string `s`, count the number of substrings that consist of only one distinct letter.

**Example 1:**
s = "aaaba" → 8 ("aaa"×1 + "aa"×2 + "a"×4 + "b"×1)

**Constraints:**
- 1 <= s.length <= 1000
- s[i] is a lowercase English letter

## Approach

游程统计:每段极大等值游程长度 L 贡献 L×(L+1)/2 个子串,求和。

时间 O(n),空间 O(1)。
