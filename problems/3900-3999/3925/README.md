# [3925] Concatenate Array With Reverse

## Description

[LeetCode Problem Description](https://leetcode.com/problems/concatenate-array-with-reverse/description/)

* algorithms
* Easy (90.72%)
* Likes:    42
* Dislikes: 3
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums of length n.
Construct a new array ans of length 2 * n such that the first n elements are the same as nums, and the next n elements are the elements of nums in reverse order.
Formally, for 0 <= i <= n - 1:
ans[i] = nums[i]
ans[i + n] = nums[n - i - 1]
Return an integer array ans.

Example 1:
Input: nums = [1,2,3]
Output: [1,2,3,3,2,1]
Explanation:
The first n elements of ans are the same as nums.
For the next n = 3 elements, each element is taken from nums in reverse order:
ans[3] = nums[2] = 3
ans[4] = nums[1] = 2
ans[5] = nums[0] = 1
Thus, ans = [1, 2, 3, 3, 2, 1].
Example 2:
Input: nums = [1]
Output: [1,1]
Explanation:
The array remains the same when reversed. Thus, ans = [1, 1].

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
Hint 1: Pure simulation problem.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个长度为 n 的整数数组 nums。

构造一个长度为 2 * n 的新数组 ans，使得前 n 个元素与 nums 相同，后 n 个元素是 nums 逆序后的元素。

形式化地，对于 0 <= i <= n - 1：
- ans[i] = nums[i]
- ans[i + n] = nums[n - i - 1]

返回整数数组 ans。

示例 1：
输入：nums = [1,2,3]
输出：[1,2,3,3,2,1]
解释：
ans 的前 n 个元素与 nums 相同。
后 n = 3 个元素按逆序取自 nums：
ans[3] = nums[2] = 3
ans[4] = nums[1] = 2
ans[5] = nums[0] = 1
因此 ans = [1, 2, 3, 3, 2, 1]。

示例 2：
输入：nums = [1]
输出：[1,1]
解释：
数组逆序后保持不变。因此 ans = [1, 1]。

约束：
1 <= nums.length <= 100
1 <= nums[i] <= 100

提示 1：纯模拟题。

## 解题思路

纯模拟题。构造新数组 ans，长度为 2n：
- 前 n 个元素直接复制 nums
- 后 n 个元素从 nums 末尾向前取

实现上可以先复制 nums，再从后向前遍历 nums 逐个 push，时间复杂度 O(n)，空间复杂度 O(1)（不算输出数组）。
