# [面试题 16.24] 数对和

## Description


```md
https://leetcode.cn/problems/pairs-with-sum-lcci/description/
* lcci
* Medium (50.85%)
* Likes:    72
* Dislikes: -
* Testcase Example:  '[5]\n1'
设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。
示例 1：
输入：nums = [5,6,5], target = 11
输出：[[5,6]]
示例 2：
输入：nums = [5,6,5,6], target = 11
输出：[[5,6],[5,6]]
提示：
nums.length <= 100000
-105 <= nums[i], target <= 105
Hint 1: 从蛮力解法开始。运行复杂度是什么？解决这个问题的最佳时间是什么？
Hint 2: 我们可以用散列表使它更快吗?
Hint 3: 如果数组有序呢？
Hint 4: 如果我们对数组进行排序，那么就可以对数字进行重复的二进制搜索。如果数组是有序的呢？我们能否在O(N)时间和O(1)空间中求解这个问题？

```

## Description (English)

Design an algorithm to find all pairs of integers in an array that sum to a specified value. Each number may belong to at most one pair.

Example 1: nums = [5,6,5], target = 11 → [[5,6]]
Example 2: nums = [5,6,5,6], target = 11 → [[5,6],[5,6]]

Notes: nums.length <= 100000; -10^5 <= nums[i], target <= 10^5.

## 思路

排序 + 首尾双指针 O(n log n)/O(1)：和偏小左进、偏大右退、相等配对并双端各退一格（一数只配一次）。配对内按值升序输出。

## Solution

[SourceCode](./solution.js)
