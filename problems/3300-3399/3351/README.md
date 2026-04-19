# [3351] Sum of Good Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-good-subsequences/description/)

* algorithms
* Hard (30.88%)
* Likes:    157
* Dislikes: 9
* Testcase Example:  '[1,2,1]'

```md
You are given an integer array nums. A good subsequence is defined as a subsequence of nums where the absolute difference between any two consecutive elements in the subsequence is exactly 1.
Return the sum of all possible good subsequences of nums.
Since the answer may be very large, return it modulo 109 + 7.
Note that a subsequence of size 1 is considered good by definition.

Example 1:

Input: nums = [1,2,1]
Output: 14
Explanation:

Good subsequences are: [1], [2], [1], [1,2], [2,1], [1,2,1].
The sum of elements in these subsequences is 14.


Example 2:

Input: nums = [3,4,5]
Output: 40
Explanation:

Good subsequences are: [3], [4], [5], [3,4], [4,5], [3,4,5].
The sum of elements in these subsequences is 40.



Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105


```

## 翻译

给定数组 nums，求所有"好"子序列的元素之和。好子序列指相邻元素差的绝对值恰好为 1。结果 mod 10^9+7。

## 解题思路

按值DP。维护 count[v] 和 sum[v]，分别表示以值 v 结尾的好子序列个数和元素和。对每个 x = nums[i]，它可以接在 x-1 或 x+1 后面，也可以单独成序列。转移：count[x] += count[x-1] + count[x+1] + 1，sum[x] += sum[x-1] + sum[x+1] + x * (count[x-1] + count[x+1] + 1)。O(n)。

## Solution

[SourceCode](./solution.js)
