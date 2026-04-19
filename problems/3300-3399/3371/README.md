# [3371] Identify the Largest Outlier in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/description/)

* algorithms
* Medium (36.25%)
* Likes:    227
* Dislikes: 30
* Testcase Example:  '[2,3,5,10]'

```md
You are given an integer array nums. This array contains n elements, where exactly n - 2 elements are special numbers. One of the remaining two elements is the sum of these special numbers, and the other is an outlier.
An outlier is defined as a number that is neither one of the original special numbers nor the element representing the sum of those numbers.
Note that special numbers, the sum element, and the outlier must have distinct indices, but may share the same value.
Return the largest potential outlier in nums.

Example 1:

Input: nums = [2,3,5,10]
Output: 10
Explanation:
The special numbers could be 2 and 3, thus making their sum 5 and the outlier 10.

Example 2:

Input: nums = [-2,-1,-3,-6,4]
Output: 4
Explanation:
The special numbers could be -2, -1, and -3, thus making their sum -6 and the outlier 4.

Example 3:

Input: nums = [1,1,1,1,1,5,5]
Output: 5
Explanation:
The special numbers could be 1, 1, 1, 1, and 1, thus making their sum 5 and the other 5 as the outlier.


Constraints:

3 <= nums.length <= 105
-1000 <= nums[i] <= 1000
The input is generated such that at least one potential outlier exists in nums.


```

## 中文翻译

给定数组 nums，其中 n-2 个是特殊数，1 个是它们的和 sum，1 个是异常值 outlier。返回最大的可能异常值。

## 解题思路

枚举 outlier 候选。sum = totalSum - outlier。若 sum 在数组中（且不是 outlier 本身，需考虑计数），则 outlier 合法。用 Map 统计频率，对每个候选 outlier 检查 sum = totalSum - outlier 是否在 Map 中且频率足够。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
