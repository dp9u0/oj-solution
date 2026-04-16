# [1528] Shuffle String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shuffle-string/description/)

* algorithms
* Easy (85.38%)
* Likes:    2942
* Dislikes: 546
* Testcase Example:  '"codeleet"\n[4,5,6,7,0,2,1,3]'

```md
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.

Example 1:


Input: s = 'codeleet', indices = [4,5,6,7,0,2,1,3]
Output: 'leetcode'
Explanation: As shown, 'codeleet' becomes 'leetcode' after shuffling.

Example 2:

Input: s = 'abc', indices = [0,1,2]
Output: 'abc'
Explanation: After shuffling, each character remains in its position.


Constraints:

s.length == indices.length == n
1 <= n <= 100
s consists of only lowercase English letters.
0 <= indices[i] < n
All values of indices are unique.


```

## 中文翻译

给定字符串 s 和 indices 数组，s[i] 移动到 indices[i] 位置，返回还原后的字符串。

## 解题思路

创建等长数组，按 indices 放置字符即可。

## Solution

[SourceCode](./solution.js)
