# [1911] Maximum Alternating Subsequence Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-alternating-subsequence-sum/description/)

* algorithms
* Medium (59.02%)
* Likes:    1438
* Dislikes: 33
* Testcase Example:  '[4,2,5,3]'

```md
The alternating sum of a 0-indexed array is defined as the sum of the elements at even indices minus the sum of the elements at odd indices.

For example, the alternating sum of [4,2,5,3] is (4 + 5) - (2 + 3) = 4.

Given an array nums, return the maximum alternating sum of any subsequence of nums (after reindexing the elements of the subsequence).


A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements&#39; relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not.

Example 1:

Input: nums = [4,2,5,3]
Output: 7
Explanation: It is optimal to choose the subsequence [4,2,5] with alternating sum (4 + 5) - 2 = 7.

Example 2:

Input: nums = [5,6,7,8]
Output: 8
Explanation: It is optimal to choose the subsequence [8] with alternating sum 8.

Example 3:

Input: nums = [6,2,1,2,4,5]
Output: 10
Explanation: It is optimal to choose the subsequence [6,1,5] with alternating sum (6 + 5) - 1 = 10.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 题目翻译

给定数组 nums，求任意子序列的最大交替和（偶数位加、奇数位减）。

## 解题思路

DP。维护两个状态：
- `even`：子序列当前在偶数位置（下一个元素要减）时的最大交替和
- `odd`：子序列当前在奇数位置（下一个元素要加）时的最大交替和

对每个元素 x：
- 可加入 odd 结尾的子序列：`newEven = odd + x`
- 可加入 even 结尾的子序列：`newOdd = even - x`
- 也可跳过或单独开始

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
