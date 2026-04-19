# [3886] Sum of Sortable Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-sortable-integers/description/)

* algorithms
* Hard (30.87%)
* Likes:    81
* Dislikes: 4
* Testcase Example:  '[3,1,2]'

```md
You are given an integer array nums of length n.
An integer k is called sortable if k divides n and you can sort nums in non-decreasing order by sequentially performing the following operations:

Partition nums into consecutive subarrays of length k.
Cyclically rotate each subarray independently any number of times to the left or to the right.

Return an integer denoting the sum of all possible sortable integers k.

Example 1:

Input: nums = [3,1,2]
Output: 3
Explanation:​​​​​​​

For n = 3, possible divisors are 1 and 3.
For k = 1: each subarray has one element. No rotation can sort the array.
For k = 3: the single subarray [3, 1, 2] can be rotated once to produce [1, 2, 3], which is sorted.
Only k = 3 is sortable. Hence, the answer is 3.


Example 2:

Input: nums = [7,6,5]
Output: 0
Explanation:

For n = 3, possible divisors are 1 and 3.
For k = 1: each subarray has one element. No rotation can sort the array.
For k = 3: the single subarray [7, 6, 5] cannot be rotated into non-decreasing order.
No k is sortable. Hence, the answer is 0.


Example 3:

Input: nums = [5,8]
Output: 3
Explanation:​​​​​​​

For n = 2, possible divisors are 1 and 2.
Since [5, 8] is already sorted, every divisor is sortable. Hence, the answer is 1 + 2 = 3.



Constraints:

1 <= n == nums.length <= 105
1 <= nums[i] <= 105


```

## 翻译

给定长度为 n 的数组 nums。整数 k 称为"可排序的"，如果 k 整除 n，并且可以通过以下操作将 nums 排成非递减顺序：
1. 将 nums 分成若干长度为 k 的连续子数组。
2. 对每个子数组独立进行任意次数的循环左旋或右旋。

返回所有可排序整数 k 的和。

## 解题思路

**枚举 n 的因子 + 逐组验证**

对每个因子 k：
1. 将数组分成长度为 k 的连续组。
2. 每组检查循环下降点数量（group[i] > group[(i+1)%k] 的次数），若超过 1 则不可旋转为非递减。
3. 相邻组间检查边界条件：前一组的最大值 <= 后一组的最小值。

关键观察：循环旋转不改变组内元素的多重集。一个组能旋转为非递减 ⟺ 最多有 1 个循环下降点。相邻组排序后首尾相接 ⟺ 前组 max <= 后组 min。

时间复杂度：O(n · d(n))，d(n) 为因子个数。

## Solution

[SourceCode](./solution.js)
