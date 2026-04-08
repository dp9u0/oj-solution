# [3880] Minimum Absolute Difference Between Two Values

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-absolute-difference-between-two-values/description/)

* algorithms
* Easy (66.14%)
* Testcase Example:  '[1,0,0,2,0,1]'

```md
You are given an integer array nums consisting only of 0, 1, and 2.
A pair of indices (i, j) is called valid if nums[i] == 1 and nums[j] == 2.
Return the minimum absolute difference between i and j among all valid pairs. If no valid pair exists, return -1.
The absolute difference between indices i and j is defined as abs(i - j).

Example 1:
Input: nums = [1,0,0,2,0,1]
Output: 2
Explanation:
The valid pairs are:
(0, 3) which has absolute difference of abs(0 - 3) = 3.
(5, 3) which has absolute difference of abs(5 - 3) = 2.
Thus, the answer is 2.
Example 2:
Input: nums = [1,0,1,0]
Output: -1
Explanation:
There are no valid pairs in the array, thus the answer is -1.

Constraints:
1
0

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定一个只包含 0、1、2 的整数数组 nums。

一对索引 (i, j) 被称为有效的，如果 nums[i] == 1 且 nums[j] == 2。

返回所有有效对中 |i - j| 的最小值。如果不存在有效对，返回 -1。

**示例 1：**
- 输入：nums = [1,0,0,2,0,1]
- 输出：2
- 解释：有效对有 (0,3) 差值为 3，(5,3) 差值为 2，最小值为 2

**示例 2：**
- 输入：nums = [1,0,1,0]
- 输出：-1
- 解释：数组中没有 2，不存在有效对

## Approach (解题思路)

**一次遍历 + 记录最近位置**

维护两个变量：
- `last1`: 最近一次遇到的 1 的索引
- `last2`: 最近一次遇到的 2 的索引

遍历数组时：
- 遇到 1：如果 `last2` 存在，计算 |i - last2| 并更新最小值；更新 `last1`
- 遇到 2：如果 `last1` 存在，计算 |i - last1| 并更新最小值；更新 `last2`

这样每次遇到新的 1 或 2 时，都会与之前最近的对立面计算距离，保证能找到最小差值。

**时间复杂度：** O(n)
**空间复杂度：** O(1)
