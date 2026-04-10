# [503] Next Greater Element II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/next-greater-element-ii/description/)

* algorithms
* Medium (68.17%)
* Likes:    9179
* Dislikes: 239
* Testcase Example:  '[1,2,1]'

```md
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.
The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn&#39;t exist, return -1 for this number.

Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1&#39;s next greater number is 2;
The number 2 can&#39;t find next greater number.
The second 1&#39;s next greater number needs to search circularly, which is also 2.

Example 2:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]


Constraints:

1 <= nums.length <= 104
-109 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个循环整数数组 `nums`（即 `nums[nums.length - 1]` 的下一个元素是 `nums[0]`），返回 `nums` 中每个元素的下一个更大数。

一个数 x 的"下一个更大数"是指在数组中从该位置向后遍历（可循环）遇到的第一个比 x 大的数。如果不存在，则返回 -1。

**示例 1：**
- 输入：nums = [1,2,1]
- 输出：[2,-1,2]

**示例 2：**
- 输入：nums = [1,2,3,4,3]
- 输出：[2,3,4,-1,4]

**约束：** 1 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9

## Approach

使用单调栈解决。因为是循环数组，等价于将数组拼接一次后找下一个更大元素。

- 将数组遍历范围扩展到 2n（用 i % n 取模映射回原下标）
- 维护一个单调递减栈，存储下标
- 对于每个元素，不断弹出栈顶比当前小的元素，它们的结果就是当前元素
- 未被匹配到的元素结果为 -1

时间复杂度 O(n)，空间复杂度 O(n)。
