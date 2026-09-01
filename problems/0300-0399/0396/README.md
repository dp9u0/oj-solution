# [396] Rotate Function

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rotate-function/description/)

* algorithms
* Medium (45.63%)
* Likes:    1681
* Dislikes: 280
* Testcase Example:  '[4,3,2,6]'

```md
You are given an integer array nums of length n.
Assume arrk to be an array obtained by rotating nums by k positions clock-wise. We define the rotation function F on nums as follow:

F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1].

Return the maximum value of F(0), F(1), ..., F(n-1).
The test cases are generated so that the answer fits in a 32-bit integer.

Example 1:

Input: nums = [4,3,2,6]
Output: 26
Explanation:
F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.

Example 2:

Input: nums = [100]
Output: 0


Constraints:

n == nums.length
1 <= n <= 105
-100 <= nums[i] <= 100


```

## 题目翻译

给定长度为 n 的数组 nums，arrk 是将 nums 顺时针旋转 k 位后的数组。定义 F(k) = 0*arrk[0] + 1*arrk[1] + ... + (n-1)*arrk[n-1]。返回 F(0)...F(n-1) 中的最大值。

## 解题思路

**递推公式**

F(k) 与 F(k-1) 的关系：F(k) = F(k-1) + sum - n * nums[n-k]

推导：旋转一次相当于把最后一个元素移到最前面，其他元素系数各加 1（即加 sum），但移到前面的元素系数从 n-1 变为 0（即减去 n * 该元素）。

1. 计算 F(0) 和 sum(nums)
2. 递推计算 F(1)...F(n-1)
3. 取最大值

## Solution

[SourceCode](./solution.js)
