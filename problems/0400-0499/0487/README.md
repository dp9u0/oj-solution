# [487] 最大连续1的个数 II

## Description


```md
https://leetcode.cn/problems/max-consecutive-ones-ii/description/
* algorithms
* Medium (56.11%)
* Likes:    176
* Dislikes: -
* Testcase Example:  '[1,0,1,1,0]'
给定一个二进制数组 nums ，如果最多可以翻转一个 0 ，则返回数组中连续 1 的最大个数。

示例 1：
输入：nums = [1,0,1,1,0]
输出：4
解释：翻转第一个 0 可以得到最长的连续 1。
当翻转以后，最大连续 1 的个数为 4。
示例 2:
输入：nums = [1,0,1,1,0,1]
输出：4

提示:
1 <= nums.length <= 105
nums[i] 不是 0 就是 1.

进阶：如果输入的数字是作为 无限流 逐个输入如何处理？换句话说，内存不能存储下所有从流中输入的数字。您可以有效地解决吗？

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a binary array, return the maximum number of consecutive 1s if you can flip **at most one** 0.

- Example 1: [1,0,1,1,0] → `4`
- Example 2: [1,0,1,1,0,1] → `4`

Constraints: length ≤ 10^5.

Follow-up: what if the input is a stream (can't store all numbers)?

## Approach

**滑动窗口(最多含一个 0)**。记 `lastZero` 为窗口内最近一个 0 的下标:

- 新元素是 0 且窗口内已有 0(`lastZero >= left`)→ 左边界移到上一个 0 之后;
- 每步更新 `right - left + 1` 最大值。

只维护 left / lastZero 两个标量,天然支持流式输入(进阶),时间 O(n) 空间 O(1)。
