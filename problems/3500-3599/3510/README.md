# [3510] Minimum Pair Removal to Sort Array II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/description/)

* algorithms
* Hard (39.06%)
* Likes:    411
* Dislikes: 39
* Testcase Example:  '[5,2,3,1]'

```md
Given an array nums, you can perform the following operation any number of times:

Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
Replace the pair with their sum.

Return the minimum number of operations needed to make the array non-decreasing.
An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

Example 1:

Input: nums = [5,2,3,1]
Output: 2
Explanation:

The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].

The array nums became non-decreasing in two operations.

Example 2:

Input: nums = [1,2,2]
Output: 0
Explanation:
The array nums is already sorted.


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## 题目翻译

给定数组，重复操作：选择相邻和对最小的（相同取最左），替换为它们的和。求使数组非递减的最少操作次数。

## 解题思路

双向链表 + 最小堆 + 惰性删除。

- 双向链表维护数组，O(1) 合并相邻节点
- 最小堆存储 [sum, left_idx, right_idx]，弹出时检查有效性（惰性删除）
- 维护下降计数（descents：nums[i] > nums[i+1] 的位置数），降为 0 时停止
- 合并时更新受影响的 descent 和新相邻对

时间复杂度 O(n log n)

## Solution

[SourceCode](./solution.js)
