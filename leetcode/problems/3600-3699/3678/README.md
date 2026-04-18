# [3678] Smallest Absent Positive Greater Than Average

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-absent-positive-greater-than-average/description/)

* algorithms
* Easy (34.22%)
* Likes:    65
* Dislikes: 5
* Testcase Example:  '[3,5]'

```md
You are given an integer array nums.
Return the smallest absent positive integer in nums such that it is strictly greater than the average of all elements in nums.
The average of an array is defined as the sum of all its elements divided by the number of elements.

Example 1:

Input: nums = [3,5]
Output: 6
Explanation:

The average of nums is (3 + 5) / 2 = 8 / 2 = 4.
The smallest absent positive integer greater than 4 is 6.


Example 2:

Input: nums = [-1,1,2]
Output: 3
Explanation:

​​​​​​​The average of nums is (-1 + 1 + 2) / 3 = 2 / 3 = 0.667.
The smallest absent positive integer greater than 0.667 is 3.


Example 3:

Input: nums = [4,-1]
Output: 2
Explanation:

The average of nums is (4 + (-1)) / 2 = 3 / 2 = 1.50.
The smallest absent positive integer greater than 1.50 is 2.



Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100​​​​​​​


```

## 翻译

给定整数数组nums，返回不在nums中的最小正整数，且该整数严格大于所有元素的平均值。

## 解题思路

计算平均值，用Set存储nums元素。从 Math.floor(avg)+1（至少为1）开始向上找第一个不在Set中的正整数。

## Solution

[SourceCode](./solution.js)
