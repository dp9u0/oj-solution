# [1879] Minimum XOR Sum of Two Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/description/)

* algorithms
* Hard (50.97%)
* Likes:    722
* Dislikes: 13
* Testcase Example:  '[1,2]\n[2,3]'

```md
You are given two integer arrays nums1 and nums2 of length n.
The XOR sum of the two integer arrays is (nums1[0] XOR nums2[0]) + (nums1[1] XOR nums2[1]) + ... + (nums1[n - 1] XOR nums2[n - 1]) (0-indexed).

For example, the XOR sum of [1,2,3] and [3,2,1] is equal to (1 XOR 3) + (2 XOR 2) + (3 XOR 1) = 2 + 0 + 2 = 4.

Rearrange the elements of nums2 such that the resulting XOR sum is minimized.
Return the XOR sum after the rearrangement.

Example 1:

Input: nums1 = [1,2], nums2 = [2,3]
Output: 2
Explanation: Rearrange nums2 so that it becomes [3,2].
The XOR sum is (1 XOR 3) + (2 XOR 2) = 2 + 0 = 2.
Example 2:

Input: nums1 = [1,0,3], nums2 = [5,3,4]
Output: 8
Explanation: Rearrange nums2 so that it becomes [5,4,3].
The XOR sum is (1 XOR 5) + (0 XOR 4) + (3 XOR 3) = 4 + 4 + 0 = 8.


Constraints:

n == nums1.length
n == nums2.length
1 <= n <= 14
0 <= nums1[i], nums2[i] <= 107


```

## 题目翻译

给定两个长度为 n 的数组 `nums1` 和 `nums2`。重新排列 `nums2` 的元素，使 XOR 和最小。XOR 和 = `(nums1[0]^nums2[0]) + (nums1[1]^nums2[1]) + ...`

## 解题思路

经典 **状态压缩 DP**（排列匹配/指派问题）。

- n <= 14，用位掩码表示 nums2 中哪些位置已被使用。
- `dp[mask]` 表示使用了 mask 中对应位置的 nums2 元素后，前 `popcount(mask)` 个 nums1 元素的最小 XOR 和。
- 转移：对于第 `i = popcount(mask)` 个 nums1 元素，枚举所有未使用的 nums2 位置 j，`dp[mask | (1<<j)] = min(dp[mask | (1<<j)], dp[mask] + (nums1[i] ^ nums2[j]))`。

时间复杂度 O(n * 2^n)。

## Solution

[SourceCode](./solution.js)
