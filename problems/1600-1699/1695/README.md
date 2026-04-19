# [1695] Maximum Erasure Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-erasure-value/description/)

* algorithms
* Medium (64.20%)
* Likes:    3404
* Dislikes: 67
* Testcase Example:  '[4,2,4,5,6]'

```md
You are given an array of positive integers nums and want to erase a subarray containingunique elements. The score you get by erasing the subarray is equal to the sum of its elements.
Return the maximum score you can get by erasing exactly one subarray.
An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

Example 1:

Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].

Example 2:

Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 104


```

## 翻译

给定正整数数组 `nums`，找到一个所有元素唯一的子数组，使其元素和最大。返回最大和。

## Approach

**滑动窗口。** 用 Set 或 Map 维护窗口内元素，右指针扩展窗口并累加和，遇到重复元素时左指针收缩直到移除重复元素。过程中记录最大和。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
