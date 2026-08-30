# [4031] Find All Numbers Disappeared in an Array II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array-ii/description/)

* algorithms
* Medium (52.98%)
* Likes:    53
* Dislikes: 5
* Testcase Example:  '[3,9,7]\r\n1\r\n12\r'

```md
You are given an integer array nums and two integers lower and upper.
A missing integer is an integer in the inclusive range [lower, upper] that does not appear in nums.
Return a 2D integer array where each element is of the form [start, end], representing a contiguous range of missing integers. Return the ranges in increasing order. If there are no missing integers, return an empty array.
Note: Consecutive missing integers should be grouped into a single range.

Example 1:

Input: nums = [3,9,7], lower = 1, upper = 12
Output: [[1,2],[4,6],[8,8],[10,12]]
Explanation:

The missing integers are [1, 2, 4, 5, 6, 8, 10, 11, 12].
Grouping the missing integers into the minimum number of contiguous ranges, we get [1, 2], [4, 6], [8, 8], and [10, 12].
Therefore, the answer is [[1, 2], [4, 6], [8, 8], [10, 12]].


Example 2:

Input: nums = [1,1], lower = 5, upper = 7
Output: [[5,7]]
Explanation:

The missing integers are [5, 6, 7].
Grouping the missing integers into the minimum number of contiguous ranges, we get [5, 7].
Therefore, the answer is [[5, 7]].


Example 3:

Input: nums = [2,3,5], lower = 2, upper = 3
Output: []
Explanation:

There are no missing integers.
Therefore, the answer is [].



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= lower <= upper <= 105


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个整数数组 nums 以及两个整数 lower 和 upper。
"缺失整数"指在闭区间 [lower, upper] 内但没有出现在 nums 中的整数。
返回一个二维整数数组，每个元素形如 [start, end]，表示一段连续的缺失整数区间。按区间递增顺序返回。如果没有缺失整数，返回空数组。
注意：连续的缺失整数应合并为一个区间。

示例 1：
输入: nums = [3,9,7], lower = 1, upper = 12
输出: [[1,2],[4,6],[8,8],[10,12]]
解释: 缺失整数为 [1,2,4,5,6,8,10,11,12]，合并成最少数量的连续区间即 [1,2]、[4,6]、[8,8]、[10,12]。

示例 2：
输入: nums = [1,1], lower = 5, upper = 7
输出: [[5,7]]
解释: 缺失整数为 [5,6,7]，合并为 [5,7]。

示例 3：
输入: nums = [2,3,5], lower = 2, upper = 3
输出: []
解释: 没有缺失整数。

约束：
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^5
1 <= lower <= upper <= 10^5

## 解题思路

关键观察：值域和数组规模都不超过 10^5，因此可以线性扫描整个区间 [lower, upper]。

算法：
1. 将 nums 中所有元素放入哈希集合 set，实现 O(1) 的存在性查询（自动去重，且天然处理 nums 中不在 [lower, upper] 范围内的元素，如示例 2）。
2. 从 lower 到 upper 逐个整数 v 扫描：
   - 若 v 缺失且当前没有开启的区间，则开启新区间 start = v；
   - 若 v 存在且当前有开启的区间，则关闭区间 [start, v-1]。
3. 扫描结束后若仍有开启的区间，收尾为 [start, upper]。

复杂度：
- 时间：O(n + U)，U = upper - lower + 1 ≤ 10^5
- 空间：O(n) 哈希集合（不计输出）
