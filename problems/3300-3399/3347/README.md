# [3347] Maximum Frequency of an Element After Performing Operations II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/description/)

* algorithms
* Hard (53.82%)
* Likes:    304
* Dislikes: 21
* Testcase Example:  '[1,4,5]\n1\n2'

```md
You are given an integer array nums and two integers k and numOperations.
You must perform an operation numOperations times on nums, where in each operation you:

Select an index i that was not selected in any previous operations.
Add an integer in the range [-k, k] to nums[i].

Return the maximum possible frequency of any element in nums after performing the operations.

Example 1:

Input: nums = [1,4,5], k = 1, numOperations = 2
Output: 2
Explanation:
We can achieve a maximum frequency of two by:

Adding 0 to nums[1], after which nums becomes [1, 4, 5].
Adding -1 to nums[2], after which nums becomes [1, 4, 4].


Example 2:

Input: nums = [5,11,20,20], k = 5, numOperations = 1
Output: 2
Explanation:
We can achieve a maximum frequency of two by:

Adding 0 to nums[1].



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= k <= 109
0 <= numOperations <= nums.length


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个整数数组 nums 和两个整数 k、numOperations。可以进行 numOperations 次操作，每次选择一个未操作过的下标 i，将 nums[i] 加上 [-k, k] 范围内的任意整数。求操作后数组中任意元素的最大频率。

## 解题思路

排序 + 差分数组/滑动窗口。排序后枚举目标值 x（只考虑 nums 中已有的值），计算 [x-k, x+k] 范围内有多少个数（滑动窗口），以及其中已经等于 x 的个数（二分查找）。答案为 min(窗口内总数, numOperations + 已等于x的个数)。
