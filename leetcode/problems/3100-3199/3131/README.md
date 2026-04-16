# [3131] Find the Integer Added to Array I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-integer-added-to-array-i/description/)

* algorithms
* Easy (82.89%)
* Likes:    173
* Dislikes: 12
* Testcase Example:  '[2,6,4]\n[9,7,5]'

```md
You are given two arrays of equal length, nums1 and nums2.
Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.
As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.
Return the integer x.

Example 1:

Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">nums1 = [2,6,4], nums2 = [9,7,5]
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">3
Explanation:
The integer added to each element of nums1 is 3.

Example 2:

Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">nums1 = [10], nums2 = [5]
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">-5
Explanation:
The integer added to each element of nums1 is -5.

Example 3:

Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">nums1 = [1,1,1,1], nums2 = [1,1,1,1]
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">0
Explanation:
The integer added to each element of nums1 is 0.


Constraints:

1 <= nums1.length == nums2.length <= 100
0 <= nums1[i], nums2[i] <= 1000
The test cases are generated in a way that there is an integer x such that nums1 can become equal to nums2 by adding x to each element of nums1.


```

## 中文翻译

给定等长数组 nums1 和 nums2，nums1 中每个元素加上整数 x 后变成 nums2。求 x。

## 解题思路

排序后取对应位置的差值，即 min(nums2) - min(nums1)。

## Solution

[SourceCode](./solution.js)
