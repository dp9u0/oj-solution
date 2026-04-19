# [899] Orderly Queue

## Description

[LeetCode Problem Description](https://leetcode.com/problems/orderly-queue/description/)

* algorithms
* Hard (66.90%)
* Likes:    1833
* Dislikes: 621
* Testcase Example:  '"cba"\n1'

```md
You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string.
Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.

Example 1:

Input: s = 'cba', k = 1
Output: 'acb'
Explanation:
In the first move, we move the 1st character &#39;c&#39; to the end, obtaining the string 'bac'.
In the second move, we move the 1st character &#39;b&#39; to the end, obtaining the final result 'acb'.

Example 2:

Input: s = 'baaca', k = 3
Output: 'aaabc'
Explanation:
In the first move, we move the 1st character &#39;b&#39; to the end, obtaining the string 'aacab'.
In the second move, we move the 3rd character &#39;c&#39; to the end, obtaining the final result 'aaabc'.


Constraints:

1 <= k <= s.length <= 1000
s consist of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s 和整数 k，每次操作可以选择前 k 个字母中的一个移到末尾。返回任意次操作后能得到的字典序最小字符串。

## 解题思路

关键观察：k=1 时只能旋转字符串，枚举所有旋转取最小。k>=2 时可以交换任意相邻字符（通过巧妙操作），因此可以重排为任意排列，直接排序即可。O(n) 或 O(n log n)。
