# [1221] Split a String in Balanced Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-a-string-in-balanced-strings/description/)

* algorithms
* Easy (87.36%)
* Likes:    2916
* Dislikes: 959
* Testcase Example:  '"RLRRLLRLRL"'

```md
Balanced strings are those that have an equal quantity of &#39;L&#39; and &#39;R&#39; characters.
Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.

Return the maximum number of balanced strings you can obtain.

Example 1:

Input: s = 'RLRRLLRLRL'
Output: 4
Explanation: s can be split into 'RL', 'RRLL', 'RL', 'RL', each substring contains same number of &#39;L&#39; and &#39;R&#39;.

Example 2:

Input: s = 'RLRRRLLRLL'
Output: 2
Explanation: s can be split into 'RL', 'RRRLLRLL', each substring contains same number of &#39;L&#39; and &#39;R&#39;.
Note that s cannot be split into 'RL', 'RR', 'RL', 'LR', 'LL', because the 2nd and 5th substrings are not balanced.
Example 3:

Input: s = 'LLLLRRRR'
Output: 1
Explanation: s can be split into 'LLLLRRRR'.


Constraints:

2 <= s.length <= 1000
s[i] is either &#39;L&#39; or &#39;R&#39;.
s is a balanced string.


```

## 题目翻译

平衡字符串中 'L' 和 'R' 数量相等。给定一个平衡字符串 s，将其分成若干子串，每个子串都是平衡的。返回可以获得的最大平衡子串数。

**示例 1：** s = "RLRRLLRLRL" → 4（"RL","RRLL","RL","RL"）
**示例 2：** s = "RLRRRLLRLL" → 2
**示例 3：** s = "LLLLRRRR" → 1

**约束：** 2 <= s.length <= 1000，s 是平衡字符串。

## 解题思路 (Approach)

贪心。遍历字符串，用计数器 balance 记录 L(+1) 和 R(-1) 的差值。每当 balance 归零时，说明找到一个平衡子串，结果加 1。贪心地在每个平衡点切分即可得到最大数量。

时间复杂度：O(n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
