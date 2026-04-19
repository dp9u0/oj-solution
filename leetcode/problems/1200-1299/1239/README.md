# [1239] Maximum Length of a Concatenated String with Unique Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/)

* algorithms
* Medium (54.71%)
* Likes:    4572
* Dislikes: 340
* Testcase Example:  '["un","iq","ue"]'

```md
You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.
Return the maximum possible length of s.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: arr = ['un','iq','ue']
Output: 4
Explanation: All the valid concatenations are:
- ''
- 'un'
- 'iq'
- 'ue'
- 'uniq' ('un' + 'iq')
- 'ique' ('iq' + 'ue')
Maximum length is 4.

Example 2:

Input: arr = ['cha','r','act','ers']
Output: 6
Explanation: Possible longest valid concatenations are 'chaers' ('cha' + 'ers') and 'acters' ('act' + 'ers').

Example 3:

Input: arr = ['abcdefghijklmnopqrstuvwxyz']
Output: 26
Explanation: The only string in arr has all 26 characters.


Constraints:

1 <= arr.length <= 16
1 <= arr[i].length <= 26
arr[i] contains only lowercase English letters.


```

## 题目翻译

给定字符串数组 arr，选择一个子序列拼接成字符串 s，要求 s 中所有字符不重复。返回 s 的最大可能长度。

## 解题思路

将每个字符串转为 26 位 bitmask。先过滤掉自身有重复字符的字符串。然后 DFS 回溯，每个字符串选或不选，用 mask 判断是否与已选字符冲突。arr 长度最多 16，复杂度可控。

## Solution

[SourceCode](./solution.js)
