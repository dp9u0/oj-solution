# [2390] Removing Stars From a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/removing-stars-from-a-string/description/)

* algorithms
* Medium (79.14%)
* Likes:    3218
* Dislikes: 235
* Testcase Example:  '"leet**cod*e"'

```md
You are given a string s, which contains stars *.
In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.

Return the string after all stars have been removed.
Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.


Example 1:

Input: s = 'leet**cod*e'
Output: 'lecoe'
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is &#39;t&#39; in 'leet**cod*e'. s becomes 'lee*cod*e'.
- The closest character to the 2nd star is &#39;e&#39; in 'lee*cod*e'. s becomes 'lecod*e'.
- The closest character to the 3rd star is &#39;d&#39; in 'lecod*e'. s becomes 'lecoe'.
There are no more stars, so we return 'lecoe'.
Example 2:

Input: s = 'erase*****'
Output: ''
Explanation: The entire string is removed, so we return an empty string.


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters and stars *.
The operation above can be performed on s.


```

## 题目翻译

给定包含 '*' 的字符串 s。每次操作选择一个 '*'，删除它及其左边最近的非 '*' 字符。返回所有操作后的字符串。

**示例 1：** s = "leet**cod*e" → "lecoe"
**示例 2：** s = "erase*****" → ""

**约束：** 1 <= s.length <= 10^5

## 解题思路 (Approach)

用栈模拟。遍历字符串，遇到普通字符入栈，遇到 '*' 则弹出栈顶。最后将栈中字符拼接成结果。

时间复杂度：O(n)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
