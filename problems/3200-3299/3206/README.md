# [3206] Alternating Groups I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/alternating-groups-i/description/)

* algorithms
* Easy (68.96%)
* Likes:    173
* Dislikes: 10
* Testcase Example:  '[1,1,1]'

```md
There is a circle of red and blue tiles. You are given an array of integers colors. The color of tile i is represented by colors[i]:

colors[i] == 0 means that tile i is red.
colors[i] == 1 means that tile i is blue.

Every 3 contiguous tiles in the circle with alternating colors (the middle tile has a different color from its left and right tiles) is called an alternating group.
Return the number of alternating groups.
Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

Example 1:

Input: colors = [1,1,1]
Output: 0
Explanation:


Example 2:

Input: colors = [0,1,0,0,1]
Output: 3
Explanation:

Alternating groups:



Constraints:

3 <= colors.length <= 100
0 <= colors[i] <= 1


```

## 题目翻译

环形排列的红蓝瓷砖数组 colors（0=红，1=蓝）。每个由 3 个连续瓷砖组成的、中间瓷砖颜色与左右都不同的组称为"交替组"。求交替组的数量。

## 解题思路

**遍历检查**

对每个位置 i，检查 colors[i] 是否与左右邻居都不同。环形数组取模处理边界。O(n)。

## Solution

[SourceCode](./solution.js)
