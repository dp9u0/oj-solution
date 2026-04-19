# [3845] Maximum Subarray XOR with Bounded Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-subarray-xor-with-bounded-range/description/)

* algorithms
* Hard (31.90%)
* Likes:    67
* Dislikes: 2
* Testcase Example:  '[5,4,5,6]\n2'

```md
You are given a non-negative integer array nums and an integer k.
You must select a subarray of nums such that the difference between its maximum and minimum elements is at most k. The value of this subarray is the bitwise XOR of all elements in the subarray.
Return an integer denoting the maximum possible value of the selected subarray.

Example 1:

Input: nums = [5,4,5,6], k = 2
Output: 7
Explanation:

Select the subarray [5, 4, 5, 6].
The difference between its maximum and minimum elements is 6 - 4 = 2 <= k.
The value is 4 XOR 5 XOR 6 = 7.


Example 2:

Input: nums = [5,4,5,6], k = 1
Output: 6
Explanation:

Select the subarray [5, 4, 5, 6].
The difference between its maximum and minimum elements is 6 - 6 = 0 <= k.
The value is 6.



Constraints:

1 <= nums.length <= 4 * 104
0 <= nums[i] < 215
0 <= k < 215


```

## 题目翻译

给定非负整数数组 nums 和整数 k，选一个子数组使得 max-min <= k，返回该子数组异或值的最大值。

## 解题思路

**滑动窗口 + 前缀异或 + 计数字典树**

子数组 [l,r] 的异或 = prefix[r+1] ^ prefix[l]。用单调双端队列维护窗口 max/min，滑动窗口保证 max-min <= k。对每个 r，窗口内 prefix[l..r] 中找与 prefix[r+1] 异或最大的值，用 15 位计数 Trie 支持 insert/remove/query。

时间 O(n * 15)，空间 O(n * 15)。

## Solution

[SourceCode](./solution.js)
