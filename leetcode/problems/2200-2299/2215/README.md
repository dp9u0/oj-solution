# [2215] Find the Difference of Two Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-difference-of-two-arrays/description/)

* algorithms
* Easy (81.38%)
* Likes:    2620
* Dislikes: 129
* Testcase Example:  '[1,2,3]\n[2,4,6]'

```md
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums1. Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].


Constraints:

1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000


```

## 翻译

给定两个数组 nums1 和 nums2，返回一个列表 [list1, list2]，其中 list1 是 nums1 中有但 nums2 中没有的不重复元素，list2 是 nums2 中有但 nums1 中没有的不重复元素。

## Approach

用 Set 分别存储两个数组的元素。遍历 nums1 的 Set，找出不在 set2 中的元素；同理遍历 nums2 的 Set。

时间复杂度 O(n+m)，空间复杂度 O(n+m)。

## Solution

[SourceCode](./solution.js)
