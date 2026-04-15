# [2570] Merge Two 2D Arrays by Summing Values

## Description

[LeetCode Problem Description](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description/)

* algorithms
* Easy (81.69%)
* Likes:    840
* Dislikes: 38
* Testcase Example:  '[[1,2],[2,3],[4,5]]\n[[1,4],[3,2],[4,1]]'

```md
You are given two 2D integer arrays nums1 and nums2.

nums1[i] = [idi, vali]indicate that the number with the id idi has a value equal to vali.
nums2[i] = [idi, vali]indicate that the number with the id idi has a value equal to vali.

Each array contains unique ids and is sorted in ascending order by id.
Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

Only ids that appear in at least one of the two arrays should be included in the resulting array.
Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays, then assume its value in that array to be 0.

Return the resulting array. The returned array must be sorted in ascending order by id.

Example 1:

Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
Output: [[1,6],[2,3],[3,2],[4,6]]
Explanation: The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6.

Example 2:

Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
Explanation: There are no common ids, so we just include each id with its value in the resulting list.


Constraints:

1 <= nums1.length, nums2.length <= 200
nums1[i].length == nums2[j].length == 2
1 <= idi, vali <= 1000
Both arrays contain unique ids.
Both arrays are instrictly ascending order by id.


```

## 题目翻译

给定两个已按 id 升序排列的二维整数数组 `nums1` 和 `nums2`，其中每个元素为 `[id, value]`。将两个数组合并，相同 id 的值相加，结果按 id 升序排列。

## 解题思路

双指针归并：两个数组都已排序，用双指针从前往后遍历，比较 id 大小，较小的先加入结果，id 相同时值相加。

时间复杂度：O(n + m)，空间复杂度：O(n + m)

## Solution

[SourceCode](./solution.js)
