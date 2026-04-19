# [2826] Sorting Three Groups

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sorting-three-groups/description/)

* algorithms
* Medium (42.96%)
* Likes:    527
* Dislikes: 93
* Testcase Example:  '[2,1,3,2,1]'

```md
You are given an integer array nums. Each element in nums is 1, 2 or 3. In each operation, you can remove an element fromnums. Return the minimum number of operations to make nums non-decreasing.

Example 1:

Input: nums = [2,1,3,2,1]
Output: 3
Explanation:
One of the optimal solutions is to remove nums[0], nums[2] and nums[3].

Example 2:

Input: nums = [1,3,2,1,3,3]
Output: 2
Explanation:
One of the optimal solutions is to remove nums[1] and nums[2].

Example 3:

Input: nums = [2,2,2,2,3,3]
Output: 0
Explanation:
nums is already non-decreasing.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 3


Follow-up: Can you come up with an algorithm that runs in O(n) time complexity?

```

## 题目翻译

给定一个整数数组 `nums`，每个元素是 1、2 或 3。每次操作可以删除一个元素。返回使 `nums` 非递减的最小操作次数。

进阶：能否设计 O(n) 时间复杂度的算法？

## 解题思路

最少删除次数 = n - 最长非递减子序列长度。元素只有 1、2、3，用三个变量分别记录以 1、以 1~2、以 1~3 结尾的最长子序列长度，O(n) 遍历更新。

## Solution

[SourceCode](./solution.js)
