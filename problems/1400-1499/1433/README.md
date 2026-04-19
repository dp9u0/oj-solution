# [1433] Check If a String Can Break Another String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-a-string-can-break-another-string/description/)

* algorithms
* Medium (70.92%)
* Likes:    786
* Dislikes: 156
* Testcase Example:  '"abc"\n"xya"'

```md
Given two strings: s1 and s2 with the samesize, check if somepermutation of string s1 can breaksomepermutation of string s2 or vice-versa. In other words s2 can break s1or vice-versa.
A string xcan breakstring y(both of size n) if x[i] >= y[i](in alphabetical order)for all ibetween 0 and n-1.

Example 1:

Input: s1 = 'abc', s2 = 'xya'
Output: true
Explanation: 'ayx' is a permutation of s2='xya' which can break to string 'abc' which is a permutation of s1='abc'.

Example 2:

Input: s1 = 'abe', s2 = 'acd'
Output: false
Explanation: All permutations for s1='abe' are: 'abe', 'aeb', 'bae', 'bea', 'eab' and 'eba' and all permutation for s2='acd' are: 'acd', 'adc', 'cad', 'cda', 'dac' and 'dca'. However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.

Example 3:

Input: s1 = 'leetcodee', s2 = 'interview'
Output: true


Constraints:

s1.length == n
s2.length == n
1 <= n <= 10^5
All strings consist of lowercase English letters.


```

## 题目翻译

给定两个等长字符串 s1 和 s2，判断 s1 的某个排列是否能"打破"s2 的某个排列，或反之。x 打破 y 意味着排序后 x[i] >= y[i] 对所有 i 成立。

**示例 1：** s1 = "abc", s2 = "xya" → true（"xya"排序="axy" >= "abc"）
**示例 2：** s1 = "abe", s2 = "acd" → false
**示例 3：** s1 = "leetcodee", s2 = "interview" → true

**约束：** 1 <= n <= 10^5，只含小写字母。

## 解题思路 (Approach)

将 s1 和 s2 分别排序。检查两种情况：s1 各位都 >= s2，或 s2 各位都 >= s1。只要其中一种成立即返回 true。

时间复杂度：O(n log n)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
