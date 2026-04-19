# [2366] Minimum Replacements to Sort the Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/description/)

* algorithms
* Hard (53.14%)
* Likes:    2086
* Dislikes: 69
* Testcase Example:  '[3,9,3]'

```md
You are given a 0-indexed integer array nums. In one operation you can replace any element of the array with any two elements that sum to it.

For example, consider nums = [5,6,7]. In one operation, we can replace nums[1] with 2 and 4 and convert nums to [5,2,4,7].

Return the minimum number of operations to make an array that is sorted in non-decreasing order.

Example 1:

Input: nums = [3,9,3]
Output: 2
Explanation: Here are the steps to sort the array in non-decreasing order:
- From [3,9,3], replace the 9 with 3 and 6 so the array becomes [3,3,6,3]
- From [3,3,6,3], replace the 6 with 3 and 3 so the array becomes [3,3,3,3,3]
There are 2 steps to sort the array in non-decreasing order. Therefore, we return 2.

Example 2:

Input: nums = [1,2,3,4,5]
Output: 0
Explanation: The array is already in non-decreasing order. Therefore, we return 0.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 中文翻译

给定数组 nums，一次操作可将一个元素替换为两个和等于它的元素。求使数组非递减的最少操作次数。

约束：n <= 10^5, nums[i] <= 10^9

## 解题思路

**从右向左贪心**

1. 最右元素不需拆分，设 maxVal = nums[n-1]。
2. 从右向左遍历：若 nums[i] <= maxVal，更新 maxVal = nums[i]。
3. 若 nums[i] > maxVal，需拆成 k = ceil(nums[i]/maxVal) 份，操作数 += k-1。
4. 拆分后最小值为 floor(nums[i]/k)，更新 maxVal。

时间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
