# [面试题 17.10] 主要元素

## Description


```md
https://leetcode.cn/problems/find-majority-element-lcci/description/
* lcci
* Easy (55.89%)
* Likes:    246
* Dislikes: -
* Testcase Example:  '[3,2,3]'
数组中占比超过一半的元素称之为主要元素。给你一个 整数 数组，找出其中的主要元素。若没有，返回 -1 。请设计时间复杂度为 O(N) 、空间复杂度为 O(1) 的解决方案。

示例 1：
输入：[1,2,5,9,5,9,5,5,5]
输出：5
示例 2：
输入：[3,2]
输出：-1
示例 3：
输入：[2,2,1,1,1,2,2]
输出：2
Hint 1: 从蛮力解法开始。你能检查一下每个值是否为主要元素吗?
Hint 2: 考虑蛮力解法。我们选择一个元素，然后通过计算匹配和非匹配元素的数量来验证它是否是主要元素。假设对于第一个元素，前几次检查显示 7 个不匹配的元素和 3 个匹配的元素。有必要继续检查这个元素吗?
Hint 3: 主要元素一开始看起来并不一定像主要元素。例如，有可能主要元素出现在数组的第一个元素中，然后在接下来的 8 个元素中都不再出现。但是，在这些情况下，主要元素将在数组的后面出现(实际上，在数组的后面会出现很多次)。当某个元素看起来“不太像”主要元素时，继续检查它并不一定很重要。
Hint 4: 还要注意，主要元素对于某些子数组也必须是主要元素，而且子数组不能拥有多个主要元素。
Hint 5: 试试这个:给定一个元素，开始检查它是否是一个子数组的开始，同时对于这个子数组，该元素是它的主要元素。一旦它变得“不太可能”(出现的次数少于一半)，就开始检查下一个元素(子数组之后的元素)。

```

## Description (English)

The element occupying more than half of an array is called the majority element. Given an integer array, find its majority element; if none exists, return -1. Design a solution with O(N) time and O(1) space.

Example 1:
Input: [1,2,5,9,5,9,5,5,5]
Output: 5

Example 2:
Input: [3,2]
Output: -1

Example 3:
Input: [2,2,1,1,1,2,2]
Output: 2

## 思路

Boyer-Moore 摩尔投票 O(N)/O(1)：不同元素两两抵消，count 归零即换候选。若主要元素存在，它必在抵消后存活为候选——但"可能不存在"，故须第二遍线性扫描复核出现次数严格过半，否则返回 -1。

## Solution

[SourceCode](./solution.js)
