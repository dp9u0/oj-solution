# [1681] Minimum Incompatibility

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-incompatibility/description/)

* algorithms
* Hard (41.13%)
* Likes:    301
* Dislikes: 101
* Testcase Example:  '[1,2,1,4]\n2'

```md
You are given an integer array nums​​​ and an integer k. You are asked to distribute this array into k subsets of equal size such that there are no two equal elements in the same subset.
A subset&#39;s incompatibility is the difference between the maximum and minimum elements in that array.
Return the minimum possible sum of incompatibilities of the k subsets after distributing the array optimally, or return -1 if it is not possible.
A subset is a group integers that appear in the array with no particular order.

Example 1:

Input: nums = [1,2,1,4], k = 2
Output: 4
Explanation: The optimal distribution of subsets is [1,2] and [1,4].
The incompatibility is (2-1) + (4-1) = 4.
Note that [1,1] and [2,4] would result in a smaller sum, but the first subset contains 2 equal elements.
Example 2:

Input: nums = [6,3,8,1,3,1,2,2], k = 4
Output: 6
Explanation: The optimal distribution of subsets is [1,2], [2,3], [6,8], and [1,3].
The incompatibility is (2-1) + (3-2) + (8-6) + (3-1) = 6.

Example 3:

Input: nums = [5,3,3,6,3,3], k = 3
Output: -1
Explanation: It is impossible to distribute nums into 3 subsets where no two elements are equal in the same subset.


Constraints:

1 <= k <= nums.length <= 16
nums.length is divisible by k
1 <= nums[i] <= nums.length


```

## 翻译

将数组分成 k 个等大子集，每个子集内无重复元素。子集不兼容性 = max - min。求所有子集不兼容性之和的最小值，不可能返回 -1。

## 解题思路

n <= 16，位掩码 DP。预处理所有合法子集（大小 n/k、无重复），按最低位分组。dp[mask] 为已用元素的最小不兼容性和。每次取 mask 最低未用位，枚举包含该位的合法子集转移。总复杂度 O(2^n * n)。

## Solution

[SourceCode](./solution.js)
