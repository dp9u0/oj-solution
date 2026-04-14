# [1186] Maximum Subarray Sum with One Deletion

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/description/)

* algorithms
* Medium (47.16%)
* Likes:    2035
* Dislikes: 83
* Testcase Example:  '[1,-2,0,3]'

```md
Given an array of integers, return the maximum sum for a non-emptysubarray (contiguous elements) with at most one element deletion.In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and thesum of the remaining elements is maximum possible.
Note that the subarray needs to be non-empty after deleting one element.

Example 1:

Input: arr = [1,-2,0,3]
Output: 4
Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.
Example 2:

Input: arr = [1,-2,-2,3]
Output: 3
Explanation: We just choose [3] and it&#39;s the maximum sum.

Example 3:

Input: arr = [-1,-1,-1,-1]
Output: -1
Explanation:The final subarray needs to be non-empty. You can&#39;t choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.


Constraints:

1 <= arr.length <= 105
-104 <= arr[i] <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组，返回非空子数组在最多删除一个元素后的最大和。子数组删除后必须非空。

## 解题思路

DP。维护两个状态：noDel[i] 表示以 arr[i] 结尾不删元素的最大子数组和；oneDel[i] 表示以 arr[i] 结尾且已删除一个元素的最大子数组和。
- noDel[i] = max(arr[i], noDel[i-1] + arr[i])
- oneDel[i] = max(noDel[i-1], oneDel[i-1] + arr[i])（要么删 arr[i]，要么之前已删）
结果 = max(noDel[i], oneDel[i]) 对所有 i。O(n)。
