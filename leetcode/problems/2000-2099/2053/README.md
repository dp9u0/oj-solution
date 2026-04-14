# [2053] Kth Distinct String in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-distinct-string-in-an-array/description/)

* algorithms
* Easy (82.12%)
* Likes:    1318
* Dislikes: 53
* Testcase Example:  '["d","b","c","b","c","a"]\n2'

```md
A distinct string is a string that is present only once in an array.
Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string ''.
Note that the strings are considered in the order in which they appear in the array.

Example 1:

Input: arr = ['d','b','c','b','c','a'], k = 2
Output: 'a'
Explanation:
The only distinct strings in arr are 'd' and 'a'.
'd' appears 1st, so it is the 1st distinct string.
'a' appears 2nd, so it is the 2nd distinct string.
Since k == 2, 'a' is returned.

Example 2:

Input: arr = ['aaa','aa','a'], k = 1
Output: 'aaa'
Explanation:
All strings in arr are distinct, so the 1st string 'aaa' is returned.

Example 3:

Input: arr = ['a','b','a'], k = 3
Output: ''
Explanation:
The only distinct string is 'b'. Since there are fewer than 3 distinct strings, we return an empty string ''.


Constraints:

1 <= k <= arr.length <= 1000
1 <= arr[i].length <= 5
arr[i] consists of lowercase English letters.


```

## 题目翻译

给定字符串数组 arr 和整数 k，返回数组中第 k 个只出现一次的字符串（按出现顺序）。若不足 k 个则返回空字符串。

## 解题思路

先用 Map 统计每个字符串出现次数，再按顺序遍历数组，找到第 k 个出现次数为 1 的字符串。

## Solution

[SourceCode](./solution.js)
