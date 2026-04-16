# [1187] Make Array Strictly Increasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-array-strictly-increasing/description/)

* algorithms
* Hard (57.88%)
* Likes:    2356
* Dislikes: 51
* Testcase Example:  '[1,5,3,6,7]\n[1,3,2,4]'

```md
Given two integer arraysarr1 and arr2, return the minimum number of operations (possibly zero) neededto make arr1 strictly increasing.
In one operation, you can choose two indices0 <=i < arr1.lengthand0 <= j < arr2.lengthand do the assignmentarr1[i] = arr2[j].
If there is no way to makearr1strictly increasing,return-1.

Example 1:

Input: arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
Output: 1
Explanation: Replace 5 with 2, then arr1 = [1, 2, 3, 6, 7].

Example 2:

Input: arr1 = [1,5,3,6,7], arr2 = [4,3,1]
Output: 2
Explanation: Replace 5 with 3 and then replace 3 with 4. arr1 = [1, 3, 4, 6, 7].

Example 3:

Input: arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
Output: -1
Explanation: You can&#39;t make arr1 strictly increasing.

Constraints:

1 <= arr1.length, arr2.length <= 2000
0 <= arr1[i], arr2[i] <= 10^9



```

## 中文翻译

给定两个数组 arr1 和 arr2，每次操作可将 arr1[i] 替换为 arr2[j]。求使 arr1 严格递增的最少操作次数，不可能返回 -1。

## 解题思路

DP。dp[i] = Map<value, minOps>，表示处理到 arr1 第 i 个位置后，最后一个值为 value 时的最少操作数。对每个位置，从上一个状态的每个值转移：保留 arr1[i]（需 > prev）或替换为 arr2 中 > prev 的最小值。arr2 排序去重后可用二分查找。

## Solution

[SourceCode](./solution.js)
