# [3176] Find the Maximum Length of a Good Subsequence I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/description/)

* algorithms
* Medium (32.66%)
* Likes:    168
* Dislikes: 98
* Testcase Example:  '[1,2,1,1,3]\n2'

```md
You are given an integer array nums and a non-negative integer k. A sequence of integers seq is called good if there are at most k indices i in the range [0, seq.length - 2] such that seq[i] != seq[i + 1].
Return the maximum possible length of a good subsequence of nums.

Example 1:

Input: nums = [1,2,1,1,3], k = 2
Output: 4
Explanation:
The maximum length subsequence is [1,2,1,1,3].

Example 2:

Input: nums = [1,2,3,4,5,1], k = 0
Output: 2
Explanation:
The maximum length subsequence is [1,2,3,4,5,1].


Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 109
0 <= k <= min(nums.length, 25)


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和非负整数 k。一个序列 seq 被称为"好的"，如果在 [0, seq.length - 2] 范围内最多有 k 个索引 i 满足 seq[i] != seq[i+1]。返回 nums 的好的子序列的最大可能长度。

## Approach

动态规划 + 值域优化。定义 dp[j][v] 为使用了至多 j 次变化、末尾值为 v 的子序列最大长度。

对于每个 nums[i]，从 j=k 到 j=0 倒序处理：
- 同值扩展：dp[j][nums[i]] + 1（不消耗变化次数）
- 异值扩展：从 dp[j-1] 中最优的异值结果 + 1（消耗 1 次变化）

为高效获取异值最优，对每个 j 维护 top1 和 top2（最大和次大值），避免遍历所有不同值。

时间复杂度 O(n * k)，空间复杂度 O(n * k)。
