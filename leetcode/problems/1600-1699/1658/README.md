# [1658] Minimum Operations to Reduce X to Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/description/)

* algorithms
* Medium (40.51%)
* Likes:    5777
* Dislikes: 128
* Testcase Example:  '[1,1,4,2,3]\n5'

```md
You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.
Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

Example 2:

Input: nums = [5,6,7,8,9], x = 4
Output: -1

Example 3:

Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 104
1 <= x <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和整数 x，每次操作可以从数组最左或最右移除一个元素并从 x 中减去其值。返回将 x 减到恰好 0 的最少操作次数，不可能则返回 -1。

## 解题思路

**滑动窗口（逆向思维）**

从两端移除元素和为 x，等价于中间剩余连续子数组和为 total - x。要操作最少 = 移除元素最少 = 剩余子数组最长。

1. 计算 total = sum(nums)
2. 找最长的连续子数组和为 target = total - x
3. 答案 = n - 最长子数组长度
4. 如果 total < x 则直接返回 -1

时间复杂度 O(n)，空间复杂度 O(1)。
