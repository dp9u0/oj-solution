# [1243] 数组变换

## Description


```md
https://leetcode.cn/problems/array-transformation/description/
* algorithms
* Easy (54.36%)
* Likes:    26
* Dislikes: -
* Testcase Example:  '[6,2,3,4]\r'
首先，给你一个初始数组 arr。然后，每天你都要根据前一天的数组生成一个新的数组。
第 i 天所生成的数组，是由你对第 i-1 天的数组进行如下操作所得的：
假如一个元素小于它的左右邻居，那么该元素自增 1。
假如一个元素大于它的左右邻居，那么该元素自减 1。
首、尾元素 永不 改变。
过些时日，你会发现数组将会不再发生变化，请返回最终所得到的数组。

示例 1：
输入：[6,2,3,4]
输出：[6,3,3,4]
解释：
第一天，数组从 [6,2,3,4] 变为 [6,3,3,4]。
无法再对该数组进行更多操作。
示例 2：
输入：[1,6,3,4,3,5]
输出：[1,4,4,4,4,5]
解释：
第一天，数组从 [1,6,3,4,3,5] 变为 [1,5,4,3,4,5]。
第二天，数组从 [1,5,4,3,4,5] 变为 [1,4,4,4,4,5]。
无法再对该数组进行更多操作。

提示：
1 <= arr.length <= 100
1 <= arr[i] <= 100
Hint 1: Try to simulate the process.
Hint 2: For every iteration, find the new array using the old one and the given rules.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an initial array `arr`, each day a new array is generated from the previous one: an element strictly smaller than BOTH its neighbors increments by 1; strictly greater than BOTH decrements by 1. The first and last elements never change. Return the final array when it stops changing.

**Example 1:**
[6,2,3,4] → [6,3,3,4]

**Constraints:**
- 1 <= arr.length <= 100, 1 <= arr[i] <= 100

## Approach

直接模拟:每天基于前一天数组同步计算更新(用旧数组判断、写进新数组),无变化即返回。

时间 O(n²),空间 O(n)。
