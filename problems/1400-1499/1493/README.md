# [1493] Longest Subarray of 1's After Deleting One Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/)

* algorithms
* Medium (71.14%)
* Likes:    4821
* Dislikes: 111
* Testcase Example:  '[1,1,0,1]'

```md
Given a binary array nums, you should delete one element from it.
Return the size of the longest non-empty subarray containing only 1&#39;s in the resulting array. Return 0 if there is no such subarray.

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1&#39;s.

Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1&#39;s is [1,1,1,1,1].

Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.


```

## 翻译

给定一个二进制数组 `nums`，你必须从中删除一个元素。返回结果数组中最长的只包含 1 的非空子数组的长度。如果没有这样的子数组，返回 0。

## Approach

**滑动窗口。** 维护一个最多包含一个 0 的滑动窗口。当窗口中有超过一个 0 时，收缩左边界直到只剩一个 0。

最终答案为窗口大小减 1（因为必须删除一个元素）。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
