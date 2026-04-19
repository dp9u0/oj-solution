# [2918] Minimum Equal Sum of Two Arrays After Replacing Zeros

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/description/)

* algorithms
* Medium (50.19%)
* Likes:    606
* Dislikes: 55
* Testcase Example:  '[3,2,0,1,0]\n[6,5,0]'

```md
You are given two arrays nums1 and nums2 consisting of positive integers.
You have to replace all the 0&#39;s in both arrays with strictly positive integers such that the sum of elements of both arrays becomes equal.
Return the minimum equal sum you can obtain, or -1 if it is impossible.

Example 1:

Input: nums1 = [3,2,0,1,0], nums2 = [6,5,0]
Output: 12
Explanation: We can replace 0&#39;s in the following way:
- Replace the two 0&#39;s in nums1 with the values 2 and 4. The resulting array is nums1 = [3,2,2,1,4].
- Replace the 0 in nums2 with the value 1. The resulting array is nums2 = [6,5,1].
Both arrays have an equal sum of 12. It can be shown that it is the minimum sum we can obtain.

Example 2:

Input: nums1 = [2,0,2,0], nums2 = [1,4]
Output: -1
Explanation: It is impossible to make the sum of both arrays equal.


Constraints:

1 <= nums1.length, nums2.length <= 105
0 <= nums1[i], nums2[i] <= 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个正整数数组 nums1 和 nums2，将所有 0 替换为严格正整数，使两个数组的元素和相等。返回能达到的最小相等和，不可能则返回 -1。

## 解题思路

**贪心**

1. 对每个数组，将所有 0 替换为 1（最小正整数），得到最小可能和 sum1、sum2，同时记录 0 的个数
2. 最小和 = sum + zeros（每个 0 至少贡献 1）
3. 如果 minSum1 == minSum2，返回该值
4. 如果 minSum1 > minSum2，只有 nums2 有 0 才能增加其和到 minSum1，否则返回 -1
5. 反之同理

时间复杂度 O(n+m)，空间复杂度 O(1)。
