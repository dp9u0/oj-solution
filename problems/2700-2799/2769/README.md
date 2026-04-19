# [2769] Find the Maximum Achievable Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-maximum-achievable-number/description/)

* algorithms
* Easy (91.24%)
* Likes:    525
* Dislikes: 777
* Testcase Example:  '4\n1'

```md
Given two integers, num and t. A number x is achievable if it can become equal to num after applying the following operation at most t times:

Increase or decrease x by 1, and simultaneously increase or decrease num by 1.

Return the maximum possible value of x.

Example 1:

Input: num = 4, t = 1
Output: 6
Explanation:
Apply the following operation once to make the maximum achievable number equal to num:

Decrease the maximum achievable number by 1, and increase num by 1.


Example 2:

Input: num = 3, t = 2
Output: 7
Explanation:
Apply the following operation twice to make the maximum achievable number equal to num:

Decrease the maximum achievable number by 1, and increase num by 1.



Constraints:

1 <= num, t<= 50


```

## 翻译

给定num和t。x每次操作可同时让x+/-1和num+/-1，最多t次操作后x等于num。求最大可达x。

## 解题思路

每次操作x减1、num加1，距离缩小2。因此x = num + 2t。

## Solution

[SourceCode](./solution.js)
