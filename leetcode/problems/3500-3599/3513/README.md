# [3513] Number of Unique XOR Triplets I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-unique-xor-triplets-i/description/)

* algorithms
* Medium (26.61%)
* Likes:    50
* Dislikes: 11
* Testcase Example:  '[1,2]'

```md
You are given an integer array nums of length n, where nums is a permutation of the numbers in the range [1, n].
A XOR triplet is defined as the XOR of three elements nums[i] XOR nums[j] XOR nums[k] where i <= j <= k.
Return the number of unique XOR triplet values from all possible triplets (i, j, k).

Example 1:

Input: nums = [1,2]
Output: 2
Explanation:
The possible XOR triplet values are:

(0, 0, 0) &rarr; 1 XOR 1 XOR 1 = 1
(0, 0, 1) &rarr; 1 XOR 1 XOR 2 = 2
(0, 1, 1) &rarr; 1 XOR 2 XOR 2 = 1
(1, 1, 1) &rarr; 2 XOR 2 XOR 2 = 2

The unique XOR values are {1, 2}, so the output is 2.

Example 2:

Input: nums = [3,1,2]
Output: 4
Explanation:
The possible XOR triplet values include:

(0, 0, 0) &rarr; 3 XOR 3 XOR 3 = 3
(0, 0, 1) &rarr; 3 XOR 3 XOR 1 = 1
(0, 0, 2) &rarr; 3 XOR 3 XOR 2 = 2
(0, 1, 2) &rarr; 3 XOR 1 XOR 2 = 0

The unique XOR values are {0, 1, 2, 3}, so the output is 4.


Constraints:

1 <= n == nums.length <= 105
1 <= nums[i] <= n
nums is a permutation of integers from 1 to n.


```

## 题目翻译

给定 [1,n] 的排列 nums，统计所有三元组 (i,j,k)（i≤j≤k）的 XOR 值有多少种不同的。

## 解题思路

**找规律**

XOR 三元组 = nums[i] XOR nums[j] XOR nums[k]，i ≤ j ≤ k。
- 当 j = i = k 时，结果 = nums[i]。可取 [1,n] 的所有值。
- 当 j = i < k 或 i < j = k 时，结果 = nums[i] XOR nums[k]（两个相同的异或为0）。
- 当 i < j < k 时，结果 = nums[i] XOR nums[j] XOR nums[k]。

关键观察：可以证明对于 n ≥ 3，所有可能的 XOR 值构成了 [0, nextPowerOf2(n)-1] 的完整范围。对于 n = 1 结果为 1，n = 2 结果为 2。

验证：n=1 → {1} → 1 种。n=2 → {1,2} → 2 种。n=3 → {0,1,2,3} → 4 种。n=4 → {0,1,...,7} → 8 种。对于 n ≥ 3，答案是 2^ceil(log2(n+1))。

## Solution

[SourceCode](./solution.js)
