# [1477] Find Two Non-overlapping Sub-arrays Each With Target Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/description/)

* algorithms
* Medium (36.80%)
* Likes:    1770
* Dislikes: 94
* Testcase Example:  '[3,2,2,4,3]\n3'

```md
You are given an array of integers arr and an integer target.
You have to find two non-overlapping sub-arrays of arr each with a sum equal target. There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.
Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays.

Example 1:

Input: arr = [3,2,2,4,3], target = 3
Output: 2
Explanation: Only two sub-arrays have sum = 3 ([3] and [3]). The sum of their lengths is 2.

Example 2:

Input: arr = [7,3,4,7], target = 7
Output: 2
Explanation: Although we have three non-overlapping sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first and third sub-arrays as the sum of their lengths is 2.

Example 3:

Input: arr = [4,3,2,6,2,3,4], target = 6
Output: -1
Explanation: We have only one sub-array of sum = 6.


Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 1000
1 <= target <= 108


```

## 题目翻译

给定数组 arr 和目标 target，找到两个不重叠的子数组，每个的和都等于 target，且长度之和最小。返回最小长度之和，不存在则返回 -1。

## 解题思路

**滑动窗口 + 前缀最优**

1. 滑动窗口找所有 sum = target 的子数组
2. best[i] = arr[0..i] 中最短的合法子数组长度
3. 当找到子数组 [l, r]（sum = target）时：
   - 若 l > 0 且 best[l-1] 有效，更新 ans = min(ans, len + best[l-1])
   - 更新 best[r] = min(best[r-1], 当前长度)

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
