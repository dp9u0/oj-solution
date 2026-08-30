# [3978] Unique Middle Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/unique-middle-element/description/)

* algorithms
* Easy (72.37%)
* Likes:    28
* Dislikes: 2
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums of odd length n.
Return true if the middle element of nums appears exactly once in the array. Otherwise return false.

Example 1:

Input: nums = [1,2,3]
Output: true
Explanation:
The middle element of nums is 2, which appears exactly once.
Thus, the answer is true.

Example 2:

Input: nums = [1,2,2]
Output: false
Explanation:
The middle element of nums is 2, which appears twice.
Thus, the answer is false.


Constraints:

1 <= n == nums.length <= 100
n is odd.
1 <= nums[i] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个长度为奇数 n 的整数数组 nums。
如果 nums 的中间元素在数组中恰好出现一次，返回 true；否则返回 false。

示例 1：

输入：nums = [1,2,3]
输出：true
解释：
nums 的中间元素是 2，它恰好出现一次。
因此答案是 true。

示例 2：

输入：nums = [1,2,2]
输出：false
解释：
nums 的中间元素是 2，它出现了两次。
因此答案是 false。

约束：

1 <= n == nums.length <= 100
n 是奇数。
1 <= nums[i] <= 100

## 解题思路

- 数组长度 n 为奇数，中间元素下标为 `mid = Math.floor(n / 2)`。
- 统计 `nums[mid]` 在整个数组中出现的次数 cnt。
- 若 `cnt === 1` 返回 true，否则返回 false。
- 时间复杂度 O(n)，空间复杂度 O(1)。
