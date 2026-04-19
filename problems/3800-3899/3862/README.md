# [3862] Find the Smallest Balanced Index

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-smallest-balanced-index/description/)

* algorithms
* Medium (19.22%)
* Likes:    90
* Dislikes: 17
* Testcase Example:  '[2,1,2]'

```md
You are given an integer array nums.
An index i is balanced if the sum of elements strictly to the left of i equals the product of elements strictly to the right of i.
If there are no elements to the left, the sum is considered as 0. Similarly, if there are no elements to the right, the product is considered as 1.
Return an integer denoting the smallest balanced index. If no balanced index exists, return -1.

Example 1:

Input: nums = [2,1,2]
Output: 1
Explanation:
For index i = 1:

Left sum = nums[0] = 2
Right product = nums[2] = 2
Since the left sum equals the right product, index 1 is balanced.

No smaller index satisfies the condition, so the answer is 1.

Example 2:

Input: nums = [2,8,2,2,5]
Output: 2
Explanation:
For index i = 2:

Left sum = 2 + 8 = 10
Right product = 2 * 5 = 10
Since the left sum equals the right product, index 2 is balanced.

No smaller index satisfies the condition, so the answer is 2.

Example 3:

Input: nums = [1]
Output: -1
For index i = 0:

The left side is empty, so the left sum is 0.
The right side is empty, so the right product is 1.
Since the left sum does not equal the right product, index 0 is not balanced.

Therefore, no balanced index exists and the answer is -1.

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 题目翻译

给定数组 nums，找最小下标 i 使左侧元素之和等于右侧元素之积。左侧为空时和为 0，右侧为空时积为 1。

## 解题思路

**前后缀分解 + 溢出截断**

左侧和线性增长（最大 10^14），右侧积指数增长。预计算后缀积并截断至超过最大可能的左和值，然后从左扫描比较。O(n) 时间。

## Solution

[SourceCode](./solution.js)
