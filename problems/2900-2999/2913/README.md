# [2913] 子数组不同元素数目的平方和 I

## Description


```md
https://leetcode.cn/problems/subarrays-distinct-element-sum-of-squares-i/description/
* algorithms
* Easy (80.46%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[1,2,1]'
给你一个下标从 0 开始的整数数组 nums 。
定义 nums 一个子数组的 不同计数 值如下：
令 nums[i..j] 表示 nums 中所有下标在 i 到 j 范围内的元素构成的子数组（满足 0 <= i <= j < nums.length ），那么我们称子数组 nums[i..j] 中不同值的数目为 nums[i..j] 的不同计数。
请你返回 nums 中所有子数组的 不同计数 的 平方 和。
子数组指的是一个数组里面一段连续 非空 的元素序列。

示例 1：
输入：nums = [1,2,1]
输出：15
解释：六个子数组分别为：
[1]: 1 个互不相同的元素。
[2]: 1 个互不相同的元素。
[1]: 1 个互不相同的元素。
[1,2]: 2 个互不相同的元素。
[2,1]: 2 个互不相同的元素。
[1,2,1]: 2 个互不相同的元素。
所有不同计数的平方和为 12 + 12 + 12 + 22 + 22 + 22 = 15 。
示例 2：
输入：nums = [2,2]
输出：3
解释：三个子数组分别为：
[2]: 1 个互不相同的元素。
[2]: 1 个互不相同的元素。
[2,2]: 1 个互不相同的元素。
所有不同计数的平方和为 12 + 12 + 12 = 3 。

提示：
1 <= nums.length <= 100
1 <= nums[i] <= 100
Hint 1: Use a set/heap to keep track of distinct element counts.

```

## Description (English)

Given a 0-indexed integer array `nums`.

Define the **distinct count** of a subarray of `nums` as follows:

Let `nums[i..j]` denote the subarray of `nums` consisting of all elements at indices from `i` to `j` (inclusive, `0 <= i <= j < nums.length`). Then the **distinct count** of `nums[i..j]` is the number of distinct values in `nums[i..j]`.

Return the sum of the **squares** of the **distinct counts** of all subarrays of `nums`.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,2,1]
Output: 15
Explanation: The six subarrays are:
[1]: 1 distinct element.
[2]: 1 distinct element.
[1]: 1 distinct element.
[1,2]: 2 distinct elements.
[2,1]: 2 distinct elements.
[1,2,1]: 2 distinct elements.
The sum of squares of distinct counts is 1² + 1² + 1² + 2² + 2² + 2² = 15.

Example 2:
Input: nums = [2,2]
Output: 3
Explanation: The three subarrays are:
[2]: 1 distinct element.
[2]: 1 distinct element.
[2,2]: 1 distinct element.
The sum of squares of distinct counts is 1² + 1² + 1² = 3.

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100

## Approach

枚举所有子数组：固定左端点 `i`，让右端点 `j` 从 `i` 向右扩展，用一个 `Set` 增量维护 `nums[i..j]` 内的不同元素（每次加入 `nums[j]`，集合大小即当前子数组的不同计数），把 `set.size ** 2` 累加到答案。

时间复杂度 O(n²)（Set 插入均摊 O(1)），空间复杂度 O(n)。n <= 100，规模很小，该做法即为标准解法。注意这是 I 版本，后续 Hard 版本（2916）需要 O(n·26) 级别的更优算法，本题数据范围无需。

## Solution

[SourceCode](./solution.js)
