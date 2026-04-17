# [3627] Maximum Median Sum of Subsequences of Size 3

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-median-sum-of-subsequences-of-size-3/description/)

* algorithms
* Medium (65.07%)
* Likes:    81
* Dislikes: 3
* Testcase Example:  '[2,1,3,2,1,3]'

```md
You are given an integer array nums with a length divisible by 3.
You want to make the array empty in steps. In each step, you can select any three elements from the array, compute their median, and remove the selected elements from the array.
The median of an odd-length sequence is defined as the middle element of the sequence when it is sorted in non-decreasing order.
Return the maximum possible sum of the medians computed from the selected elements.

Example 1:

Input: nums = [2,1,3,2,1,3]
Output: 5
Explanation:

In the first step, select elements at indices 2, 4, and 5, which have a median 3. After removing these elements, nums becomes [2, 1, 2].
In the second step, select elements at indices 0, 1, and 2, which have a median 2. After removing these elements, nums becomes empty.

Hence, the sum of the medians is 3 + 2 = 5.

Example 2:

Input: nums = [1,1,10,10,10,10]
Output: 20
Explanation:

In the first step, select elements at indices 0, 2, and 3, which have a median 10. After removing these elements, nums becomes [1, 10, 10].
In the second step, select elements at indices 0, 1, and 2, which have a median 10. After removing these elements, nums becomes empty.

Hence, the sum of the medians is 10 + 10 = 20.


Constraints:

1 <= nums.length <= 5 * 105
nums.length % 3 == 0
1 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个长度为3的倍数的整数数组 nums。每次操作从数组中任选3个元素，计算它们的中位数，然后移除这3个元素。重复操作直到数组为空。返回所有中位数之和的最大值。

## 解题思路

贪心 + 排序。将数组升序排序后，最小的 n/3 个元素注定只能作为每组的最小值（牺牲品），无法成为中位数。剩下的 2n/3 个元素两两配对，每对中较小者作为中位数，较大者作为组内最大值。为使中位数之和最大，应该让配对中的元素尽量接近（相邻配对），这样较大的元素才有机会做中位数而非被"浪费"做最大值。

具体做法：排序后，从索引 n/3 开始每隔一个取一个元素（a[n/3], a[n/3+2], a[n/3+4], ...），这些就是最优的中位数，求和即可。
