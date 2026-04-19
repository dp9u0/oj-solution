# [870] Advantage Shuffle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/advantage-shuffle/description/)

* algorithms
* Medium (54.39%)
* Likes:    1697
* Dislikes: 101
* Testcase Example:  '[2,7,11,15]\n[1,10,4,11]'

```md
You are given two integer arrays nums1 and nums2 both of the same length. The advantage of nums1 with respect to nums2 is the number of indices i for which nums1[i] > nums2[i].
Return any permutation of nums1 that maximizes its advantage with respect to nums2.

Example 1:
Input: nums1 = [2,7,11,15], nums2 = [1,10,4,11]
Output: [2,11,7,15]
Example 2:
Input: nums1 = [12,24,8,32], nums2 = [13,25,32,11]
Output: [24,32,8,12]


Constraints:

1 <= nums1.length <= 105
nums2.length == nums1.length
0 <= nums1[i], nums2[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定等长数组 nums1 和 nums2，重排 nums1 使 nums1[i] > nums2[i] 的索引数最大化（田忌赛马）。

## 解题思路

**排序 + 贪心（田忌赛马）**

1. 将 nums1 排序，将 nums2 的索引按值排序
2. 用双指针：最小 vs 最小，能赢就配对；不能赢就用最小去消耗对方最大
3. 按原始 nums2 的索引位置填入结果

时间复杂度 O(n log n)，空间复杂度 O(n)。
