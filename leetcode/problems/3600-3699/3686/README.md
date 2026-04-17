# [3686] Number of Stable Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-stable-subsequences/description/)

* algorithms
* Hard (60.22%)
* Likes:    87
* Dislikes: 3
* Testcase Example:  '[1,3,5]'

```md
You are given an integer array nums.
A subsequence is stable if it does not contain three consecutive elements with the same parity when the subsequence is read in order (i.e., consecutive inside the subsequence).
Return the number of stable subsequences.
Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: nums = [1,3,5]
Output: 6
Explanation:

Stable subsequences are [1], [3], [5], [1, 3], [1, 5], and [3, 5].
Subsequence [1, 3, 5] is not stable because it contains three consecutive odd numbers. Thus, the answer is 6.


Example 2:

Input: nums = [2,3,4,2]
Output: 14
Explanation:

The only subsequence that is not stable is [2, 4, 2], which contains three consecutive even numbers.
All other subsequences are stable. Thus, the answer is 14.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 10​​​​​​​5


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数数组 nums，统计不含三个连续同奇偶性元素的非空子序列数量，对 10^9+7 取模。

## 解题思路

DP 状态跟踪子序列末尾两个元素的奇偶性。7个状态：空、len1奇、len1偶、(奇,奇)、(奇,偶)、(偶,奇)、(偶,偶)。对每个元素按奇偶性转移，三种连续相同奇偶性时阻止转移。O(n)。
