# [3818] Minimum Prefix Removal to Make Array Strictly Increasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-prefix-removal-to-make-array-strictly-increasing/description/)

* algorithms
* Medium (73.82%)
* Likes:    55
* Dislikes: 7
* Testcase Example:  '[1,-1,2,3,3,4,5]'

```md
You are given an integer array nums.
You need to remove exactly one prefix (possibly empty) from nums.
Return an integer denoting the minimum length of the removed prefix such that the remaining array is strictly increasing.

Example 1:

Input: nums = [1,-1,2,3,3,4,5]
Output: 4
Explanation:
Removing the prefix = [1, -1, 2, 3] leaves the remaining array [3, 4, 5] which is strictly increasing.

Example 2:

Input: nums = [4,3,-2,-5]
Output: 3
Explanation:
Removing the prefix = [4, 3, -2] leaves the remaining array [-5] which is strictly increasing.

Example 3:

Input: nums = [1,2,3,4]
Output: 0
Explanation:
The array nums = [1, 2, 3, 4] is already strictly increasing so removing an empty prefix is sufficient.


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109​​​​​​​


```

## 中文翻译

给定整数数组 nums，移除一个前缀（可为空）使剩余数组严格递增。返回需移除的最小前缀长度。

## 解题思路

从右往左遍历，找到最长严格递增后缀的起点。即从末尾向前，找第一个满足 nums[i-1] >= nums[i] 的位置 i，答案就是 i。

## Solution

[SourceCode](./solution.js)
