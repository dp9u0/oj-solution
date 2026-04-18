# [3572] Maximize Y‑Sum by Picking a Triplet of Distinct X‑Values

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-ysum-by-picking-a-triplet-of-distinct-xvalues/description/)

* algorithms
* Medium (63.32%)
* Likes:    70
* Dislikes: 2
* Testcase Example:  '[1,2,1,3,2]\n[5,3,4,6,2]'

```md
You are given two integer arrays x and y, each of length n. You must choose three distinct indices i, j, and k such that:

x[i] != x[j]
x[j] != x[k]
x[k] != x[i]

Your goal is to maximize the value of y[i] + y[j] + y[k] under these conditions. Return the maximum possible sum that can be obtained by choosing such a triplet of indices.
If no such triplet exists, return -1.

Example 1:

Input: x = [1,2,1,3,2], y = [5,3,4,6,2]
Output: 14
Explanation:

Choose i = 0 (x[i] = 1, y[i] = 5), j = 1 (x[j] = 2, y[j] = 3), k = 3 (x[k] = 3, y[k] = 6).
All three values chosen from x are distinct. 5 + 3 + 6 = 14 is the maximum we can obtain. Hence, the output is 14.


Example 2:

Input: x = [1,2,1,2], y = [4,5,6,7]
Output: -1
Explanation:

There are only two distinct values in x. Hence, the output is -1.



Constraints:

n == x.length == y.length
3 <= n <= 105
1 <= x[i], y[i] <= 106


```

## 中文翻译

给定两个长度为 n 的数组 x 和 y，选三个不同下标 i, j, k 使得 x[i], x[j], x[k] 互不相同，最大化 y[i]+y[j]+y[k]。若不存在返回 -1。

## 解题思路

用 Map 对每个 x 值取最大 y 值，若不同 x 值不足 3 个返回 -1，否则排序取前 3 大求和。时间复杂度 O(n log n)。

## Solution

[SourceCode](./solution.js)
