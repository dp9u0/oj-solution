# [3208] Alternating Groups II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/alternating-groups-ii/description/)

* algorithms
* Medium (59.96%)
* Likes:    767
* Dislikes: 74
* Testcase Example:  '[0,1,0,1,0]\n3'

```md
There is a circle of red and blue tiles. You are given an array of integers colors and an integer k. The color of tile i is represented by colors[i]:

colors[i] == 0 means that tile i is red.
colors[i] == 1 means that tile i is blue.

An alternating group is every k contiguous tiles in the circle with alternating colors (each tile in the group except the first and last one has a different color from its left and right tiles).
Return the number of alternating groups.
Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

Example 1:

Input: colors = [0,1,0,1,0], k = 3
Output: 3
Explanation:

Alternating groups:


Example 2:

Input: colors = [0,1,0,0,1,0,1], k = 6
Output: 2
Explanation:

Alternating groups:


Example 3:

Input: colors = [1,1,0,1], k = 4
Output: 0
Explanation:



Constraints:

3 <= colors.length <= 105
0 <= colors[i] <= 1
3 <= k <= colors.length


```

## 中文翻译

给定一个圆形排列的红蓝瓷砖数组 colors 和整数 k，colors[i] 为 0 表示红色，1 表示蓝色。交替组是指圆形中每 k 个连续瓷砖颜色交替排列（组内每个非首尾瓷砖与其左右相邻瓷砖颜色不同）。返回交替组的数量。

## 解题思路

由于是环形数组，将数组复制一份拼接在后面，然后用滑动窗口统计连续交替的段长度。维护一个当前交替段长度 cnt，如果 colors[i] != colors[i-1] 则 cnt++，否则 cnt=1。当 cnt >= k 时说明存在一个以 i 结尾的交替组，答案+1。遍历前 n+k-1 个元素即可覆盖所有环形窗口。

## Solution

[SourceCode](./solution.js)
