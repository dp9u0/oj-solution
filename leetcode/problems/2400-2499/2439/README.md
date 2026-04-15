# [2439] Minimize Maximum of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-maximum-of-array/description/)

* algorithms
* Medium (46.51%)
* Likes:    2591
* Dislikes: 646
* Testcase Example:  '[3,7,1,6]'

```md
You are given a 0-indexed array nums comprising of n non-negative integers.
In one operation, you must:

Choose an integer i such that 1 <= i < n and nums[i] > 0.
Decrease nums[i] by 1.
Increase nums[i - 1] by 1.

Return the minimum possible value of the maximum integer of nums after performing any number of operations.

Example 1:

Input: nums = [3,7,1,6]
Output: 5
Explanation:
One set of optimal operations is as follows:
1. Choose i = 1, and nums becomes [4,6,1,6].
2. Choose i = 3, and nums becomes [4,6,2,5].
3. Choose i = 1, and nums becomes [5,5,2,5].
The maximum integer of nums is 5. It can be shown that the maximum number cannot be less than 5.
Therefore, we return 5.

Example 2:

Input: nums = [10,1]
Output: 10
Explanation:
It is optimal to leave nums as is, and since 10 is the maximum value, we return 10.


Constraints:

n == nums.length
2 <= n <= 105
0 <= nums[i] <= 109


```

## 中文翻译

给定一个 0-indexed 数组 `nums`，包含 n 个非负整数。

每次操作：选择 i (1 <= i < n) 且 nums[i] > 0，将 nums[i] 减 1，nums[i-1] 加 1。即只能将值向左移动。

返回任意次操作后数组最大值的最小可能值。

## 解题思路

**前缀和 + 贪心取上整：**

由于操作只能将值从右向左移，对于前 i+1 个元素的区间，它们的总和不变。要让前 i+1 个元素的最大值最小，最优情况是这些值尽可能均匀分布，即 `ceil(prefixSum / (i+1))`。

遍历数组，对每个位置计算 `ceil(prefixSum / count)` 取最大值即可。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
