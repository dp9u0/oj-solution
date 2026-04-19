# [321] Create Maximum Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/create-maximum-number/description/)

* algorithms
* Hard (31.32%)
* Likes:    2005
* Dislikes: 361
* Testcase Example:  '[3,4,6,5]\n[9,1,2,5,8,3]\n5'

```md
You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent the digits of two numbers. You are also given an integer k.
Create the maximum number of length k <= m + n from digits of the two numbers. The relative order of the digits from the same array must be preserved.
Return an array of the k digits representing the answer.

Example 1:

Input: nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5
Output: [9,8,6,5,3]

Example 2:

Input: nums1 = [6,7], nums2 = [6,0,4], k = 5
Output: [6,7,6,0,4]

Example 3:

Input: nums1 = [3,9], nums2 = [8,9], k = 3
Output: [9,8,9]


Constraints:

m == nums1.length
n == nums2.length
1 <= m, n <= 500
0 <= nums1[i], nums2[i] <= 9
1 <= k <= m + n
nums1 and nums2 do not have leading zeros.


```

## 题目翻译

给定两个整数数组 nums1 和 nums2，它们的长度分别为 m 和 n。nums1 和 nums2 表示两个数字的各个数位。同时给定一个整数 k。

要求从这两个数组的数字中创建一个长度为 k（k <= m + n）的最大数。需要保持每个数组中数字的相对顺序。

返回表示答案的 k 个数字的数组。

## 解题思路

这道题可以分解为以下几个子问题：

1. 从单个数组中选择指定数量的数字，保持相对顺序并使结果最大
   - 这实际上是一个单调栈的应用
   - 需要考虑剩余数字数量是否足够

2. 合并两个数组，使得结果最大
   - 类似归并排序的合并过程
   - 但是在相等的情况下需要考虑后续数字的大小

3. 枚举从两个数组分别选择的数字数量
   - nums1 选择 i 个数字
   - nums2 选择 k-i 个数字
   - 需要满足 0 <= i <= k 且 i <= nums1.length
   - 同时 k-i <= nums2.length

具体实现步骤：
1. 实现从单个数组中选择 n 个数字形成最大数的函数
2. 实现合并两个数组形成最大数的函数
3. 在主函数中枚举所有可能的分配方案，找出最大的结果

时间复杂度分析：
- 从单个数组选择数字：O(n)
- 合并两个数组：O(k)
- 枚举分配方案：O(k)
总时间复杂度：O(k * (m + n))

空间复杂度：O(k)

## Solution

[SourceCode](./solution.js)
