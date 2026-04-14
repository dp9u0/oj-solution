# [1590] Make Sum Divisible by P

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-sum-divisible-by-p/description/)

* algorithms
* Medium (42.61%)
* Likes:    2886
* Dislikes: 195
* Testcase Example:  '[3,1,4,2]\n6'

```md
Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.
Return the length of the smallest subarray that you need to remove, or -1 if it&#39;s impossible.
A subarray is defined as a contiguous block of elements in the array.

Example 1:

Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.

Example 2:

Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.

Example 3:

Input: nums = [1,2,3], p = 3
Output: 0
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= p <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数数组 nums 和 p，移除最短的子数组使得剩余元素之和能被 p 整除（不能移除整个数组）。返回最短子数组长度，不可能则 -1。

## 解题思路

设总和为 total，target = total % p。若 target == 0 则返回 0。需要找一个子数组使得其和 % p == target，这样剩余和 % p == 0。
用前缀和 + HashMap。遍历时维护 prefix % p，查找是否存在之前的 prefix 使得 (prefix - target) % p == 某个已见值。用 Map 记录最近一次出现的 prefix % p 的位置。O(n)。
