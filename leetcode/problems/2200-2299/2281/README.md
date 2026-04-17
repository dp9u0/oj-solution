# [2281] Sum of Total Strength of Wizards

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-total-strength-of-wizards/description/)

* algorithms
* Hard (29.24%)
* Likes:    1273
* Dislikes: 112
* Testcase Example:  '[1,3,1,2]'

```md
As the ruler of a kingdom, you have an army of wizards at your command.
You are given a 0-indexed integer array strength, where strength[i] denotes the strength of the ith wizard. For a contiguous group of wizards (i.e. the wizards&#39; strengths form a subarray of strength), the total strength is defined as the product of the following two values:

The strength of the weakest wizard in the group.
The total of all the individual strengths of the wizards in the group.

Return the sum of the total strengths of all contiguous groups of wizards. Since the answer may be very large, return it modulo 109 + 7.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: strength = [1,3,1,2]
Output: 44
Explanation: The following are all the contiguous groups of wizards:
- [1] from [1,3,1,2] has a total strength of min([1]) * sum([1]) = 1 * 1 = 1
- [3] from [1,3,1,2] has a total strength of min([3]) * sum([3]) = 3 * 3 = 9
- [1] from [1,3,1,2] has a total strength of min([1]) * sum([1]) = 1 * 1 = 1
- [2] from [1,3,1,2] has a total strength of min([2]) * sum([2]) = 2 * 2 = 4
- [1,3] from [1,3,1,2] has a total strength of min([1,3]) * sum([1,3]) = 1 * 4 = 4
- [3,1] from [1,3,1,2] has a total strength of min([3,1]) * sum([3,1]) = 1 * 4 = 4
- [1,2] from [1,3,1,2] has a total strength of min([1,2]) * sum([1,2]) = 1 * 3 = 3
- [1,3,1] from [1,3,1,2] has a total strength of min([1,3,1]) * sum([1,3,1]) = 1 * 5 = 5
- [3,1,2] from [1,3,1,2] has a total strength of min([3,1,2]) * sum([3,1,2]) = 1 * 6 = 6
- [1,3,1,2] from [1,3,1,2] has a total strength of min([1,3,1,2]) * sum([1,3,1,2]) = 1 * 7 = 7
The sum of all the total strengths is 1 + 9 + 1 + 4 + 4 + 4 + 3 + 5 + 6 + 7 = 44.

Example 2:

Input: strength = [5,4,6]
Output: 213
Explanation: The following are all the contiguous groups of wizards:
- [5] from [5,4,6] has a total strength of min([5]) * sum([5]) = 5 * 5 = 25
- [4] from [5,4,6] has a total strength of min([4]) * sum([4]) = 4 * 4 = 16
- [6] from [5,4,6] has a total strength of min([6]) * sum([6]) = 6 * 6 = 36
- [5,4] from [5,4,6] has a total strength of min([5,4]) * sum([5,4]) = 4 * 9 = 36
- [4,6] from [5,4,6] has a total strength of min([4,6]) * sum([4,6]) = 4 * 10 = 40
- [5,4,6] from [5,4,6] has a total strength of min([5,4,6]) * sum([5,4,6]) = 4 * 15 = 60
The sum of all the total strengths is 25 + 16 + 36 + 36 + 40 + 60 = 213.


Constraints:

1 <= strength.length <= 105
1 <= strength[i] <= 109


```

## 翻译

给定一个整数数组 strength，对于每个连续子数组，其总力量定义为：最小值 × 所有元素之和。返回所有连续子数组总力量之和，结果对 10^9+7 取模。

## 解题思路

经典单调栈问题。对每个元素 strength[i]，找到以它为最小值的最大区间 [left, right]（左边第一个更小的位置 leftBound，右边第一个更小或等于的位置 rightBound），这样就可以知道以 strength[i] 为最小值的子数组有多少个。

关键在于计算这些子数组的 sum 之和。设 prefix[i] 为前缀和，则子数组 [l..r] 的和为 prefix[r+1] - prefix[l]。进一步用前缀和的前缀和 ppx[i] = sum(prefix[0..i])，可以快速计算区间内所有子数组和的总和。

对于 strength[i] 为最小值，左边界在 (leftBound, i]，右边界在 [i, rightBound) 的子数组：
- 左边有 L = i - leftBound 个选择，右边有 R = rightBound - i 个选择
- sum贡献 = strength[i] * sum over all (left, right) of prefix[right+1] - prefix[left]
- 展开后用 ppx 可 O(1) 计算

时间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
