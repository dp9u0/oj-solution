# [3301] Maximize the Total Height of Unique Towers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/description/)

* algorithms
* Medium (37.37%)
* Likes:    132
* Dislikes: 8
* Testcase Example:  '[2,3,4,3]'

```md
You are given an array maximumHeight, where maximumHeight[i] denotes the maximum height the ith tower can be assigned.
Your task is to assign a height to each tower so that:

The height of the ith tower is a positive integer and does not exceed maximumHeight[i].
No two towers have the same height.

Return the maximum possible total sum of the tower heights. If it&#39;s not possible to assign heights, return -1.

Example 1:

Input: maximumHeight = [2,3,4,3]
Output: 10
Explanation:
We can assign heights in the following way: [1, 2, 4, 3].

Example 2:

Input: maximumHeight = [15,10]
Output: 25
Explanation:
We can assign heights in the following way: [15, 10].

Example 3:

Input: maximumHeight = [2,2,1]
Output: -1
Explanation:
It&#39;s impossible to assign positive heights to each index so that no two towers have the same height.


Constraints:

1 <= maximumHeight.length<= 105
1 <= maximumHeight[i] <= 109


```

## 中文翻译

给定每座塔的最大高度，给每座塔分配一个正整数高度且互不相同，求最大总高度之和，不可能返回 -1。

## 解题思路

**贪心：从大到小排序依次分配**

按最大高度降序排列，依次给每座塔分配 min(maxHeight[i], 前一座分配高度 - 1)。若某次分配 ≤ 0 则返回 -1。

直觉：大限制的塔先拿大值，后续塔尽量贴近自己的上限，同时保证不重复。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
