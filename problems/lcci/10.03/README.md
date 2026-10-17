# [面试题 10.03] 搜索旋转数组

## Description


```md
https://leetcode.cn/problems/search-rotate-array-lcci/description/
* lcci
* Medium (37.75%)
* Likes:    141
* Dislikes: -
* Testcase Example:  '[15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]\n5'
搜索旋转数组。给定一个排序后的数组，包含n个整数，但这个数组已被旋转过很多次了，次数不详。请编写代码找出数组中的某个元素，假设数组元素原先是按升序排列的。若有多个相同元素，返回索引值最小的一个。
示例 1：
输入：arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 5
输出：8（元素5在该数组中的索引）
示例 2：
输入：arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 11
输出：-1 （没有找到）
提示:
arr 长度范围在[1, 1000000]之间
Hint 1: 你能为此改进二分查找吗？
Hint 2: 该算法的运行时间是什么？如果数组有重复，会发生什么？

```

## Description (English)

Search in Rotated Array. Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array (originally sorted in ascending order). If the element appears multiple times, return the smallest index.

Example 1:
Input: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 5
Output: 8

Example 2:
Input: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 11
Output: -1

Note: arr.length in [1, 1000000].

## 思路

数组可含重复（题目提示明示），此时任何比较式搜索的最坏复杂度下界就是 O(n)——例如全同元素数组中某个位置的细微差别无法用少于 n 次比较判定。因此从左到右线性扫描首个命中即最小索引，已是该泛化问题的最优解；无重复时才存在 O(log n) 二分变体。

## Solution

[SourceCode](./solution.js)
