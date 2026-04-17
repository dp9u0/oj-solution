# [3076] Shortest Uncommon Substring in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/description/)

* algorithms
* Medium (50.29%)
* Likes:    172
* Dislikes: 32
* Testcase Example:  '["cab","ad","bad","c"]'

```md
You are given an array arr of size n consisting of non-empty strings.
Find a string array answer of size n such that:

answer[i] is the shortest substring of arr[i] that does not occur as a substring in any other string in arr. If multiple such substrings exist, answer[i] should be the lexicographically smallest. And if no such substring exists, answer[i] should be an empty string.

Return the array answer.

Example 1:

Input: arr = ['cab','ad','bad','c']
Output: ['ab','','ba','']
Explanation: We have the following:
- For the string 'cab', the shortest substring that does not occur in any other string is either 'ca' or 'ab', we choose the lexicographically smaller substring, which is 'ab'.
- For the string 'ad', there is no substring that does not occur in any other string.
- For the string 'bad', the shortest substring that does not occur in any other string is 'ba'.
- For the string 'c', there is no substring that does not occur in any other string.

Example 2:

Input: arr = ['abc','bcd','abcd']
Output: ['','','abcd']
Explanation: We have the following:
- For the string 'abc', there is no substring that does not occur in any other string.
- For the string 'bcd', there is no substring that does not occur in any other string.
- For the string 'abcd', the shortest substring that does not occur in any other string is 'abcd'.


Constraints:

n == arr.length
2 <= n <= 100
1 <= arr[i].length <= 20
arr[i] consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串数组 arr，对每个 arr[i] 找到最短的子串，该子串不出现在 arr 中其他任何字符串中。若有多个最短，取字典序最小。若不存在，返回空串。

## 解题思路

对每个字符串 arr[i]，枚举所有子串（按长度从小到大），检查该子串是否不出现在其他字符串中。用 includes 检查。由于 arr[i].length <= 20，子串数 O(L^2)，检查 O(n*L)，总 O(n^2 * L^3) 在约束下可行。
