# [3811] Number of Alternating XOR Partitions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-alternating-xor-partitions/description/)

* algorithms
* Medium (26.86%)
* Likes:    92
* Dislikes: 8
* Testcase Example:  '[2,3,1,4]\n1\n5'

```md
You are given an integer array nums and two distinct integers target1 and target2.
A partition of nums splits it into one or more contiguous, non-empty blocks that cover the entire array without overlap.
A partition is valid if the bitwise XOR of elements in its blocks alternates between target1 and target2, starting with target1.
Formally, for blocks b1, b2, &hellip;:

XOR(b1) = target1
XOR(b2) = target2 (if it exists)
XOR(b3) = target1, and so on.

Return the number of valid partitions of nums, modulo 109 + 7.
Note: A single block is valid if its XOR equals target1.

Example 1:

Input: nums = [2,3,1,4], target1 = 1, target2 = 5
Output: 1
Explanation:​​​​​​​

The XOR of [2, 3] is 1, which matches target1.
The XOR of the remaining block [1, 4] is 5, which matches target2.
This is the only valid alternating partition, so the answer is 1.


Example 2:

Input: nums = [1,0,0], target1 = 1, target2 = 0
Output: 3
Explanation:

​​​​​​​The XOR of [1, 0, 0] is 1, which matches target1.
The XOR of [1] and [0, 0] are 1 and 0, matching target1 and target2.
The XOR of [1, 0] and [0] are 1 and 0, matching target1 and target2.
Thus, the answer is 3.​​​​​​​


Example 3:

Input: nums = [7], target1 = 1, target2 = 7
Output: 0
Explanation:

The XOR of [7] is 7, which does not match target1, so no valid partition exists.



Constraints:

1 <= nums.length <= 105
0 <= nums[i], target1, target2 <= 105
target1 != target2


```

## 题目翻译

给定数组 nums 和两个不同的整数 target1、target2。将数组分成若干连续非空块，每块的异或值必须交替为 target1、target2、target1...（从 target1 开始）。求有效分法的数量，模 10^9+7。

## 解题思路

**前缀异或 + 哈希优化 DP**

令 `expect1[i]` = 前i个元素已分好，下一个块异或值应为 target1 的分法数；`expect2[i]` 类似。

块 nums[i..j-1] 的异或 = pxor[j] ^ pxor[i]：
- 若 = target1：expect2[j] += expect1[i]
- 若 = target2：expect1[j] += expect2[i]

即 pxor[i] = pxor[j] ^ target1 时累加 expect1[i]，pxor[i] = pxor[j] ^ target2 时累加 expect2[i]。

用哈希表 `s1[v]`、`s2[v]` 维护按前缀异或值分组的 expect1/expect2 之和，实现 O(1) 转移。

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
