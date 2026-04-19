# [2006] Count Number of Pairs With Absolute Difference K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/)

* algorithms
* Easy (85.36%)
* Likes:    1802
* Dislikes: 49
* Testcase Example:  '[1,2,2,1]\n1'

```md
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that
nums[i] - nums[j]
== k.
The value of
x
is defined as:

x if x >= 0.
-x if x < 0.


Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Example 2:

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

Example 3:

Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]


Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
1 <= k <= 99


```

## 中文翻译

给定整数数组 nums 和整数 k，统计满足 |nums[i] - nums[j]| == k 且 i < j 的数对个数。

## 解题思路

用 Map 统计每个值出现次数，遍历每个值 num，查找 num + k 的出现次数累加即可。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
