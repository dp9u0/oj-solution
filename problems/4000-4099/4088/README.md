# [4088] 峰值与谷值的差

## Description


```md
https://leetcode.cn/problems/difference-between-peaks-and-valleys/description/
* algorithms
* Easy (89.21%)
* Dislikes: -
* Testcase Example:  '[1,5,2,4,1,3,0]'
给你一个长度为 n 的整数数组 nums。
如果满足以下 所有 条件，则下标志 i 被称为 峰值 ：
0 < i < n - 1
nums[i] > nums[i - 1]
nums[i] > nums[i + 1]
如果满足以下 所有 条件，则下标志 i 被称为 谷值 ：
0 < i < n - 1
nums[i] < nums[i - 1]
nums[i] < nums[i + 1]
返回一个整数，表示所有峰值之和与所有谷值之和的 差值 。

示例 1：
输入： nums = [1,5,2,4,1,3,0]
输出： 9
解释：
峰值分别是 nums[1] = 5、nums[3] = 4 和 nums[5] = 3。
谷值分别是 nums[2] = 2 和 nums[4] = 1。
峰值之和与谷值之和的差值为 (5 + 4 + 3) - (2 + 1) = 9。因此，答案是 9。
示例 2：
输入： nums = [-5,-6,-1,-2,5,3,2]
输出： 12
解释：
峰值分别是 nums[2] = -1 和 nums[4] = 5。
谷值分别是 nums[1] = -6 和 nums[3] = -2。
峰值之和与谷值之和的差值为 (-1 + 5) - (-6 + (-2)) = 12。因此，答案是 12。
示例 3：
输入： nums = [6,5,2,5,5,3,6]
输出： -5
解释：
数组中没有峰值。
谷值分别是 nums[2] = 2 和 nums[5] = 3。
峰值之和与谷值之和的差值为 (0) - (2 + 3) = -5。因此，答案是 -5。

提示：
3 <= n == nums.length <= 100
-100 <= nums[i] <= 100

```

## Description (EN)

You are given an integer array `nums` of length `n`. An index `i` is called a **peak** if `0 < i < n - 1`, `nums[i] > nums[i - 1]`, and `nums[i] > nums[i + 1]`. An index `i` is called a **valley** if `0 < i < n - 1`, `nums[i] < nums[i - 1]`, and `nums[i] < nums[i + 1]`. Return the difference between the sum of all peaks and the sum of all valleys.

Example 1: nums = [1,5,2,4,1,3,0] → peaks 5,4,3; valleys 2,1 → (5+4+3) - (2+1) = 9.

## 思路

线性扫描 O(n)：内层下标 i 同时检查两种关系——`nums[i] > 两侧` 累加到峰值和，`nums[i] < 两侧` 累加到谷值和，二者互斥，返回峰值和 − 谷值和。

## Solution

[SourceCode](./solution.js)
