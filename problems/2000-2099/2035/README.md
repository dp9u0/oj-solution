# [2035] Partition Array Into Two Arrays to Minimize Sum Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/description/)

* algorithms
* Hard (23.26%)
* Likes:    3786
* Dislikes: 259
* Testcase Example:  '[3,9,7,3]'

```md
You are given an integer array nums of 2 * n integers. You need to partition nums into two arrays of length n to minimize the absolute difference of the sums of the arrays. To partition nums, put each element of nums into one of the two arrays.
Return the minimum possible absolute difference.

Example 1:


Input: nums = [3,9,7,3]
Output: 2
Explanation: One optimal partition is: [3,9] and [7,3].
The absolute difference between the sums of the arrays is abs((3 + 9) - (7 + 3)) = 2.

Example 2:

Input: nums = [-36,36]
Output: 72
Explanation: One optimal partition is: [-36] and [36].
The absolute difference between the sums of the arrays is abs((-36) - (36)) = 72.

Example 3:


Input: nums = [2,-1,0,4,-2,-9]
Output: 0
Explanation: One optimal partition is: [2,4,-9] and [-1,0,-2].
The absolute difference between the sums of the arrays is abs((2 + 4 + -9) - (-1 + 0 + -2)) = 0.


Constraints:

1 <= n <= 15
nums.length == 2 * n
-107 <= nums[i] <= 107


```

## 翻译

给定 2n 个整数的数组 nums，将其分成两个长度为 n 的数组，使两个数组和的绝对差最小。返回最小绝对差。

## 解题思路

Meet in the Middle。将数组分成两半各 n 个元素。

对每半枚举所有子集（2^15 = 32768），按子集大小分组记录和。

要选 n 个元素放入数组 A，等价于从左半选 k 个 + 右半选 n-k 个。对每个 k，遍历 leftSums[k] 中的每个 s1，在 sorted rightSums[n-k] 中二分查找最接近 totalSum/2 - s1 的值。

最小化 |totalSum - 2*(s1+s2)|。

总复杂度 O(2^n * n + 2^n * log(2^n)) ≈ O(n * 2^n)。

## Solution

[SourceCode](./solution.js)
