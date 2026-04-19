# [1090] Largest Values From Labels

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-values-from-labels/description/)

* algorithms
* Medium (64.14%)
* Likes:    495
* Dislikes: 638
* Testcase Example:  '[5,4,3,2,1]\n[1,1,2,2,3]\n3\n1'

```md
You are given n item&#39;s value and label as two integer arrays values and labels. You are also given two integers numWanted and useLimit.
Your task is to find a subset of items with the maximum sum of their values such that:

The number of items is at most numWanted.
The number of items with the same label is at most useLimit.

Return the maximum sum.

Example 1:

Input: values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1
Output: 9
Explanation:
The subset chosen is the first, third, and fifth items with the sum of values 5 + 3 + 1.

Example 2:

Input: values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit = 2
Output: 12
Explanation:
The subset chosen is the first, second, and third items with the sum of values 5 + 4 + 3.

Example 3:

Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit = 1
Output: 16
Explanation:
The subset chosen is the first and fourth items with the sum of values 9 + 7.


Constraints:

n == values.length == labels.length
1 <= n <= 2 * 104
0 <= values[i], labels[i] <= 2 * 104
1 <= numWanted, useLimit <= n


```

## 题目翻译

给定 values 和 labels 数组，选一个子集使得：总数 ≤ numWanted，同标签数 ≤ useLimit。求最大价值和。

## 解题思路

**贪心**

按 value 降序排列，依次选取，跳过已达到 useLimit 的标签，直到选满 numWanted 个。贪心正确性显然：优先选大值不会比选小值更差。

时间 O(n log n)。

## Solution

[SourceCode](./solution.js)
