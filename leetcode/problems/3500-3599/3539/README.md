# [3539] Find Sum of Array Product of Magical Sequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/description/)

* algorithms
* Hard (61.80%)
* Likes:    218
* Dislikes: 157
* Testcase Example:  '5\n5\n[1,10,100,10000,1000000]'

```md
You are given two integers, m and k, and an integer array nums.
A sequence of integers seq is called magical if:

seq has a size of m.
0 <= seq[i] < nums.length
The binary representation of 2seq[0] + 2seq[1] + ... + 2seq[m - 1] has k set bits.

The array product of this sequence is defined as prod(seq) = (nums[seq[0]] * nums[seq[1]] * ... * nums[seq[m - 1]]).
Return the sum of the array products for all valid magical sequences.
Since the answer may be large, return it modulo 109 + 7.
A set bit refers to a bit in the binary representation of a number that has a value of 1.

Example 1:

Input: m = 5, k = 5, nums = [1,10,100,10000,1000000]
Output: 991600007
Explanation:
All permutations of [0, 1, 2, 3, 4] are magical sequences, each with an array product of 1013.

Example 2:

Input: m = 2, k = 2, nums = [5,4,3,2,1]
Output: 170
Explanation:
The magical sequences are [0, 1], [0, 2], [0, 3], [0, 4], [1, 0], [1, 2], [1, 3], [1, 4], [2, 0], [2, 1], [2, 3], [2, 4], [3, 0], [3, 1], [3, 2], [3, 4], [4, 0], [4, 1], [4, 2], and [4, 3].

Example 3:

Input: m = 1, k = 1, nums = [28]
Output: 28
Explanation:
The only magical sequence is [0].


Constraints:

1 <= k <= m <= 30
1 <= nums.length <= 50
1 <= nums[i] <= 108


```

## 中文翻译

给定 m、k 和数组 nums，求所有"神奇序列"的数组乘积之和。神奇序列 seq 长度为 m，元素为 nums 的索引，且 sum(2^seq[i]) 的二进制表示恰好有 k 个 1。

## 解题思路

组合数学 + DP。定义 cnt[j] 为索引 j 被选中的次数。sum = sum(cnt[j]*2^j) 的 popcount 需等于 k。

DP 按位处理：状态 (剩余选择数, 进位, 已置位个数)。对于每个索引 j，枚举 cnt[j]，更新进位和置位。

最终答案 = dp结果 * m!。用 cnt[j]! 的逆元在 DP 中处理多重排列系数。

时间复杂度：O(n * m^2 * k)，空间复杂度：O(m^2 * k)

## Solution

[SourceCode](./solution.js)
