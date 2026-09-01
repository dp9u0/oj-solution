# [915] Partition Array into Disjoint Intervals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-array-into-disjoint-intervals/description/)

* algorithms
* Medium (49.42%)
* Likes:    1771
* Dislikes: 83
* Testcase Example:  '[5,0,3,8,6]'

```md
Given an integer array nums, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.

Return the length of left after such a partitioning.
Test cases are generated such that partitioning exists.

Example 1:

Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]

Example 2:

Input: nums = [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]


Constraints:

2 <= nums.length <= 105
0 <= nums[i] <= 106
There is at least one valid answer for the given input.


```

## 翻译

给定数组 nums，将其分成两个非空连续子数组 left 和 right，使得 left 中每个元素 <= right 中每个元素，且 left 长度最小。返回 left 的长度。

## Approach

贪心 + 单次遍历。维护 left 子数组的最大值 leftMax 和当前遍历过的最大值 curMax。遍历过程中：

- 如果当前元素 < leftMax，说明当前元素必须加入 left，更新 leftMax = curMax，扩展 left 边界
- 否则更新 curMax

当遍历结束后，left 的长度就是答案。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
