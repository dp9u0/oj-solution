# [1955] Count Number of Special Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-special-subsequences/description/)

* algorithms
* Hard (52.70%)
* Likes:    548
* Dislikes: 11
* Testcase Example:  '[0,1,2,2]'

```md
A sequence is special if it consists of a positive number of 0s, followed by a positive number of 1s, then a positive number of 2s.

For example, [0,1,2] and [0,0,1,1,1,2] are special.
In contrast, [2,1,0], [1], and [0,1,2,0] are not special.

Given an array nums (consisting of only integers 0, 1, and 2), return the number of different subsequences that are special. Since the answer may be very large, return it modulo 109 + 7.
A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. Two subsequences are different if the set of indices chosen are different.

Example 1:

Input: nums = [0,1,2,2]
Output: 3
Explanation: The special subsequences are bolded [0,1,2,2], [0,1,2,2], and [0,1,2,2].

Example 2:

Input: nums = [2,2,0,0]
Output: 0
Explanation: There are no special subsequences in [2,2,0,0].

Example 3:

Input: nums = [0,1,2,0,1,2]
Output: 7
Explanation: The special subsequences are bolded:
- [0,1,2,0,1,2]
- [0,1,2,0,1,2]
- [0,1,2,0,1,2]
- [0,1,2,0,1,2]
- [0,1,2,0,1,2]
- [0,1,2,0,1,2]
- [0,1,2,0,1,2]


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 2


```

## 翻译

特殊子序列：由若干 0（至少 1 个）+ 若干 1（至少 1 个）+ 若干 2（至少 1 个）组成。给定只含 0/1/2 的数组，统计特殊子序列数量，模 10^9+7。

## 解题思路

线性 DP，维护三个状态：
- dp0：全 0 子序列数（至少一个 0）
- dp1：0 后跟 1 的子序列数
- dp2：0 后跟 1 后跟 2 的子序列数

遇到 x=0：dp0 = dp0*2 + 1（扩展已有 + 新开一个）
遇到 x=1：dp1 = dp1*2 + dp0（扩展已有 + 从 0 序列转化）
遇到 x=2：dp2 = dp2*2 + dp1（扩展已有 + 从 01 序列转化）

O(n) 时间，O(1) 空间。

## Solution

[SourceCode](./solution.js)
