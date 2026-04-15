# [1909] Remove One Element to Make the Array Strictly Increasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/description/)

* algorithms
* Easy (29.69%)
* Likes:    1321
* Dislikes: 348
* Testcase Example:  '[1,2,10,5,7]'

```md
Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.
The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

Example 1:

Input: nums = [1,2,10,5,7]
Output: true
Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
[1,2,5,7] is strictly increasing, so return true.

Example 2:

Input: nums = [2,3,1,2]
Output: false
Explanation:
[3,1,2] is the result of removing the element at index 0.
[2,1,2] is the result of removing the element at index 1.
[2,3,2] is the result of removing the element at index 2.
[2,3,1] is the result of removing the element at index 3.
No resulting array is strictly increasing, so return false.
Example 3:

Input: nums = [1,1,1]
Output: false
Explanation: The result of removing any element is [1,1].
[1,1] is not strictly increasing, so return false.


Constraints:

2 <= nums.length <= 1000
1 <= nums[i] <= 1000


```

## 中文翻译

给定数组 nums，判断能否通过恰好删除一个元素使数组严格递增。若数组已经严格递增也返回 true。

## 解题思路

遍历数组，遇到 nums[i] <= nums[i-1] 时，尝试删除 nums[i] 或 nums[i-1]。删除后检查剩余数组是否严格递增。最多只需检查一处违规，因为删两个以上元素不符合要求。

贪心策略：优先删除 nums[i]（如果 nums[i-2] < nums[i]，删 nums[i-1] 也行）。用一次遍历记录违规次数。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
