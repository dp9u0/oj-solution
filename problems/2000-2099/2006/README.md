# [2006] Count Number of Pairs With Absolute Difference K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/)

* algorithms
* Easy (85.36%)
* Likes:    1822
* Dislikes: 50
* Testcase Example:  '[1,2,2,1]\n1'

```md
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that
nums[i] - nums[j]
== k.
The value of
x
is defined as:

x if x >= 0.
-x if x < 0.


Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Example 2:

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

Example 3:

Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]


Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
1 <= k <= 99


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 `nums` 和整数 `k`，返回满足 `i < j` 且 `|nums[i] - nums[j]| == k` 的数对 `(i, j)` 的数量。

示例 1：`nums = [1,2,2,1], k = 1` → `4`（两个 1 与两个 2 两两组合）
示例 2：`nums = [1,3], k = 3` → `0`
示例 3：`nums = [3,2,1,5,4], k = 2` → `3`（(3,1), (3,5), (5,... ) 即 (3,1),(3,5),(4,... ) → 共 3 对：3&1、3&5、4&2… 原题解释为 3 对）

约束：`1 <= nums.length <= 200`，`1 <= nums[i] <= 100`，`1 <= k <= 99`

## 解题思路

一遍扫描 + 计数数组（值域 1..100）：

遍历 `nums`，对当前数 `x`，累加此前出现过的 `x-k` 与 `x+k` 的次数（即以 `x` 为右端、差为 `k` 的对数），随后 `count[x]++`。哈希天然保证 `i < j` 不重不漏。

时间复杂度 O(n)，空间 O(101)。
