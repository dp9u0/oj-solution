# [1247] Minimum Swaps to Make Strings Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/description/)

* algorithms
* Medium (65.30%)
* Likes:    1469
* Dislikes: 252
* Testcase Example:  '"xx"\n"yy"'

```md
You are given two strings s1 and s2 of equal length consisting of letters 'x' and 'y' only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].
Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.

Example 1:

Input: s1 = 'xx', s2 = 'yy'
Output: 1
Explanation: Swap s1[0] and s2[1], s1 = 'yx', s2 = 'yx'.

Example 2:

Input: s1 = 'xy', s2 = 'yx'
Output: 2
Explanation: Swap s1[0] and s2[0], s1 = 'yy', s2 = 'xx'.
Swap s1[0] and s2[1], s1 = 'xy', s2 = 'xy'.
Note that you cannot swap s1[0] and s1[1] to make s1 equal to 'yx', cause we can only swap chars in different strings.

Example 3:

Input: s1 = 'xx', s2 = 'xy'
Output: -1


Constraints:

1 <= s1.length, s2.length <= 1000
s1.length == s2.length
s1, s2 only contain &#39;x&#39; or &#39;y&#39;.


```

## 题目翻译

给定两个等长的由 'x' 和 'y' 组成的字符串 s1 和 s2。可以交换 s1[i] 和 s2[j]（跨字符串交换）。求使两字符串相等的最小交换次数，不可能返回 -1。

## 解题思路

统计不同位置的两种情况：s1[i]='x',s2[i]='y' 的数量 xy，和 s1[i]='y',s2[i]='x' 的数量 yx。
- 如果 (xy + yx) 为奇数，不可能，返回 -1
- 一对 xy-xy 或 yx-yx 只需 1 次交换，一对 xy-yx 需要 2 次交换
- 结果 = xy/2 + yx/2 + (xy%2)*2 = (xy + yx) / 2 + (xy % 2)

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
