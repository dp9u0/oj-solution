# [1968] Array With Elements Not Equal to Average of Neighbors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/description/)

* algorithms
* Medium (50.67%)
* Likes:    665
* Dislikes: 58
* Testcase Example:  '[1,2,3,4,5]'

```md
You are given a 0-indexed array nums of distinct integers. You want to rearrange the elements in the array such that every element in the rearranged array is not equal to the average of its neighbors.
More formally, the rearranged array should have the property such that for every i in the range 1 <= i < nums.length - 1, (nums[i-1] + nums[i+1]) / 2 is not equal to nums[i].
Return any rearrangement of nums that meets the requirements.

Example 1:

Input: nums = [1,2,3,4,5]
Output: [1,2,4,5,3]
Explanation:
When i=1, nums[i] = 2, and the average of its neighbors is (1+4) / 2 = 2.5.
When i=2, nums[i] = 4, and the average of its neighbors is (2+5) / 2 = 3.5.
When i=3, nums[i] = 5, and the average of its neighbors is (4+3) / 2 = 3.5.

Example 2:

Input: nums = [6,2,0,9,7]
Output: [9,7,6,2,0]
Explanation:
When i=1, nums[i] = 7, and the average of its neighbors is (9+6) / 2 = 7.5.
When i=2, nums[i] = 6, and the average of its neighbors is (7+2) / 2 = 4.5.
When i=3, nums[i] = 2, and the average of its neighbors is (6+0) / 2 = 3.
Note that the original array [6,2,0,9,7] also satisfies the conditions.

Constraints:

3 <= nums.length <= 105
0 <= nums[i] <= 105


```

## 翻译

给定互不相同的整数数组，重新排列使得每个元素不等于其两个邻居的平均值。返回任意一种合法排列。

## Approach

排序后将数组交替放置：先放较小的后半部分，再放较大的前半部分，形成波浪形（小大小大小...）。具体做法：排序后用双指针，i 从 0 开始取较小值，j 从 n-1 开始取较大值，交替填充。

时间复杂度 O(n log n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
