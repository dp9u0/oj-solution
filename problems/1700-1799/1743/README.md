# [1743] Restore the Array From Adjacent Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/description/)

* algorithms
* Medium (75.02%)
* Likes:    2051
* Dislikes: 71
* Testcase Example:  '[[2,1],[3,4],[3,2]]'

```md
There is an integer array nums that consists of n unique elements, but you have forgotten it. However, you do remember every pair of adjacent elements in nums.
You are given a 2D integer array adjacentPairs of size n - 1 where each adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums.
It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear in any order.
Return the original array nums. If there are multiple solutions, return any of them.

Example 1:

Input: adjacentPairs = [[2,1],[3,4],[3,2]]
Output: [1,2,3,4]
Explanation: This array has all its adjacent pairs in adjacentPairs.
Notice that adjacentPairs[i] may not be in left-to-right order.

Example 2:

Input: adjacentPairs = [[4,-2],[1,4],[-3,1]]
Output: [-2,4,1,-3]
Explanation: There can be negative numbers.
Another solution is [-3,1,4,-2], which would also be accepted.

Example 3:

Input: adjacentPairs = [[100000,-100000]]
Output: [100000,-100000]


Constraints:

nums.length == n
adjacentPairs.length == n - 1
adjacentPairs[i].length == 2
2 <= n <= 105
-105 <= nums[i], ui, vi <= 105
There exists some nums that has adjacentPairs as its pairs.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n-1 个相邻对 adjacentPairs，还原原始数组 nums。数组中元素唯一，相邻对顺序不限。返回任意合法的原始数组。

## 解题思路

建无向图。每个元素是节点，相邻对是边。数组两端元素的度数为 1，其余为 2。找到度数为 1 的节点作为起点，DFS/BFS 遍历即可还原。O(n)。
