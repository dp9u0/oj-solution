# [3171] Find Subarray With Bitwise OR Closest to K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/description/)

* algorithms
* Hard (30.94%)
* Likes:    210
* Dislikes: 7
* Testcase Example:  '[1,2,4,5]\n3'

```md
You are given an array nums and an integer k. You need to find a subarray of nums such that the absolute difference between k and the bitwise OR of the subarray elements is as small as possible. In other words, select a subarray nums[l..r] such that
k - (nums[l] OR nums[l + 1] ... OR nums[r])
is minimum.
Return the minimum possible value of the absolute difference.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2,4,5], k = 3
Output: 0
Explanation:
The subarray nums[0..1] has OR value 3, which gives the minimum absolute difference
3 - 3
= 0.

Example 2:

Input: nums = [1,3,1,3], k = 2
Output: 1
Explanation:
The subarray nums[1..1] has OR value 3, which gives the minimum absolute difference
3 - 2
= 1.

Example 3:

Input: nums = [1], k = 10
Output: 9
Explanation:
There is a single subarray with OR value 1, which gives the minimum absolute difference
10 - 1
= 9.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109


```

## 翻译

给定数组 nums 和整数 k，找一个连续子数组使得其 OR 值与 k 的绝对差最小，返回该最小差。

## 解题思路

以每个位置为右端点，维护所有以该位置结尾的子数组 OR 值集合。由于 OR 只会置位不会清位，不同 OR 值个数不超过 31（bit 数）。每步用上一步的集合合并当前元素，更新答案。O(31n)。

## Solution

[SourceCode](./solution.js)
