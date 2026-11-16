# [266] 回文排列

## Description


```md
https://leetcode.cn/problems/palindrome-permutation/description/
* algorithms
* Easy (71.04%)
* Likes:    93
* Dislikes: -
* Testcase Example:  '"code"'
给你一个字符串 s ，如果该字符串的某个排列是 回文串 ，则返回 true ；否则，返回 false 。

示例 1：
输入：s = "code"
输出：false
示例 2：
输入：s = "aab"
输出：true
示例 3：
输入：s = "carerac"
输出：true

提示：
1 <= s.length <= 5000
s 仅由小写英文字母组成
Hint 1: Consider the palindromes of odd vs even length. What difference do you notice?
Hint 2: Count the frequency of each character.
Hint 3: If each character occurs even number of times, then it must be a palindrome. How about character which occurs odd number of times?

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a string `s`, return `true` if a permutation of it can form a palindrome (at most one character has an odd count).

**Example:**
s = "code" → false; s = "aab" → true ("aba")

## Approach

Set 开关法:字符出现就加入、再出现就移除,最终 Set 大小 ≤ 1 说明奇数频次字符至多一个。

时间 O(n),空间 O(字符集)。
