# [3024] Type of Triangle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/type-of-triangle/description/)

* algorithms
* Easy (44.06%)
* Likes:    464
* Dislikes: 69
* Testcase Example:  '[3,3,3]'

```md
You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

A triangle is called equilateral if it has all sides of equal length.
A triangle is called isosceles if it has exactly two sides of equal length.
A triangle is called scalene if all its sides are of different lengths.

Return a string representing the type of triangle that can be formed or 'none' if it cannot form a triangle.

Example 1:

Input: nums = [3,3,3]
Output: 'equilateral'
Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.

Example 2:

Input: nums = [3,4,5]
Output: 'scalene'
Explanation:
nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3.
Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
As all the sides are of different lengths, it will form a scalene triangle.


Constraints:

nums.length == 3
1 <= nums[i] <= 100


```

## 中文翻译

给定长度为 3 的数组表示三角形三条边，判断三角形类型：等边(equilateral)、等腰(isosceles)、不等边(scalene)，或不能组成三角形(none)。

## 解题思路

排序后只需判断最小两边之和是否大于第三边。再根据三条边的关系判断类型。

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
