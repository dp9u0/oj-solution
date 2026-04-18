# [3469] Find Minimum Cost to Remove Array Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-minimum-cost-to-remove-array-elements/description/)

* algorithms
* Medium (21.52%)
* Likes:    150
* Dislikes: 11
* Testcase Example:  '[6,2,8,4]'

```md
You are given an integer array nums. Your task is to remove all elements from the array by performing one of the following operations at each step until nums is empty:

Choose any two elements from the first three elements of nums and remove them. The cost of this operation is the maximum of the two elements removed.
If fewer than three elements remain in nums, remove all the remaining elements in a single operation. The cost of this operation is the maximum of the remaining elements.

Return the minimum cost required to remove all the elements.

Example 1:

Input: nums = [6,2,8,4]
Output: 12
Explanation:
Initially, nums = [6, 2, 8, 4].

In the first operation, remove nums[0] = 6 and nums[2] = 8 with a cost of max(6, 8) = 8. Now, nums = [2, 4].
In the second operation, remove the remaining elements with a cost of max(2, 4) = 4.

The cost to remove all elements is 8 + 4 = 12. This is the minimum cost to remove all elements in nums. Hence, the output is 12.

Example 2:

Input: nums = [2,1,3,3]
Output: 5
Explanation:
Initially, nums = [2, 1, 3, 3].

In the first operation, remove nums[0] = 2 and nums[1] = 1 with a cost of max(2, 1) = 2. Now, nums = [3, 3].
In the second operation remove the remaining elements with a cost of max(3, 3) = 3.

The cost to remove all elements is 2 + 3 = 5. This is the minimum cost to remove all elements in nums. Hence, the output is 5.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 106


```

## 题目翻译

给定数组 nums，每次操作从前三个元素中选两个删除（代价为两数最大值），剩一个留下；不足三个时全部删除（代价为最大值）。求删除所有元素的最小总代价。

## 解题思路

**区间 DP + 状态传递**

关键观察：每次操作从前三个中删两个、留一个，留下的元素成为下一轮的第一个。定义 dp[i][s] = 处理 nums[i..n-1] 的最小代价，其中 nums[s]（s < i）是前一轮留下的元素。

三选一转移：保留 nums[s]、nums[i]、nums[i+1] 之一，删另两个。
- 保留 s: cost = max(nums[i], nums[i+1]) + dp[i+2][s]
- 保留 i: cost = max(nums[s], nums[i+1]) + dp[i+2][i]
- 保留 i+1: cost = max(nums[s], nums[i]) + dp[i+2][i+1]

O(n^2) 时空复杂度。

## Solution

[SourceCode](./solution.js)
