# [3132] Find the Integer Added to Array II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-integer-added-to-array-ii/description/)

* algorithms
* Medium (32.88%)
* Likes:    179
* Dislikes: 44
* Testcase Example:  '[4,20,16,12,8]\n[14,18,10]'

```md
You are given two integer arrays nums1 and nums2.
From nums1 two elements have been removed, and all other elements have been increased (or decreased in the case of negative) by an integer, represented by the variable x.
As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.
Return the minimum possible integer x that achieves this equivalence.

Example 1:

Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">nums1 = [4,20,16,12,8], nums2 = [14,18,10]
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">-2
Explanation:
After removing elements at indices [0,4] and adding -2, nums1 becomes [18,14,10].

Example 2:

Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">nums1 = [3,5,5,3], nums2 = [7,7]
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">2
Explanation:
After removing elements at indices [0,3] and adding 2, nums1 becomes [7,7].


Constraints:

3 <= nums1.length <= 200
nums2.length == nums1.length - 2
0 <= nums1[i], nums2[i] <= 1000
The test cases are generated in a way that there is an integer x such that nums1 can become equal to nums2 by removing two elements and adding x to each element of nums1.


```

## 题目翻译

给定两个数组 nums1 和 nums2，从 nums1 中移除两个元素后，其余元素加上某个整数 x 后与 nums2 相等（元素和频率都相同）。返回最小的可能 x。

## 解题思路

排序后枚举。nums1 排序后，移除的两个元素只能是前几个或后几个小元素。枚举移除 nums1 的前 k1 个和后 k2 个（k1 + k2 = 2），剩余部分加上 x 应该等于 nums2。最小合法 x 就是答案。

关键：x = nums2[0] - nums1[remove_start]。只需枚举 3 种移除方式（移除前 0/1/2 个小元素）。

时间复杂度 O(n^2)

## Solution

[SourceCode](./solution.js)
