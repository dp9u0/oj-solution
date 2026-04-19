# [3117] Minimum Sum of Values by Dividing Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/description/)

* algorithms
* Hard (27.81%)
* Likes:    145
* Dislikes: 4
* Testcase Example:  '[1,4,3,3,2]\n[0,3,3,2]'

```md
You are given two arrays nums and andValues of length n and m respectively.
The value of an array is equal to the last element of that array.
You have to divide nums into m disjoint contiguous subarrays such that for the ith subarray [li, ri], the bitwise AND of the subarray elements is equal to andValues[i], in other words, nums[li] &amp; nums[li + 1] &amp; ... &amp; nums[ri] == andValues[i] for all 1 <= i <= m, where &amp; represents the bitwise AND operator.
Return the minimum possible sum of the values of the m subarrays nums is divided into. If it is not possible to divide nums into m subarrays satisfying these conditions, return -1.

Example 1:

Input: nums = [1,4,3,3,2], andValues = [0,3,3,2]
Output: 12
Explanation:
The only possible way to divide nums is:

[1,4] as 1 &amp; 4 == 0.
[3] as the bitwise AND of a single element subarray is that element itself.
[3] as the bitwise AND of a single element subarray is that element itself.
[2] as the bitwise AND of a single element subarray is that element itself.

The sum of the values for these subarrays is 4 + 3 + 3 + 2 = 12.

Example 2:

Input: nums = [2,3,5,7,7,7,5], andValues = [0,7,5]
Output: 17
Explanation:
There are three ways to divide nums:

[[2,3,5],[7,7,7],[5]] with the sum of the values 5 + 7 + 5 == 17.
[[2,3,5,7],[7,7],[5]] with the sum of the values 7 + 7 + 5 == 19.
[[2,3,5,7,7],[7],[5]] with the sum of the values 7 + 7 + 5 == 19.

The minimum possible sum of the values is 17.

Example 3:

Input: nums = [1,2,3,4], andValues = [2]
Output: -1
Explanation:
The bitwise AND of the entire array nums is 0. As there is no possible way to divide nums into a single subarray to have the bitwise AND of elements 2, return -1.


Constraints:

1 <= n == nums.length <= 104
1 <= m == andValues.length <= min(n, 10)
1 <= nums[i] < 105
0 <= andValues[j] < 105


```

## 中文翻译

给定数组 nums 和 andValues，将 nums 分成 m 个不相交连续子数组，使第 i 个子数组的按位与等于 andValues[i]。每个子数组的"值"是其最后一个元素。返回 m 个子数组值的最小总和，不可能则返回 -1。

## 解题思路

DP + 状态压缩。dp[j] 是一个 Map，key 为当前正在构建的第 (j+1) 个子数组的按位与值，value 为已完成 j 个子数组的最小值之和。

逐个处理元素，对于每个状态 (j, andVal)：
- 扩展当前子数组：新 AND = andVal & nums[i]
- 若新 AND == andValues[j]，可在此处结束子数组，代价加上 nums[i]，转到 dp[j+1]

利用按位与单调递减的性质，每个 dp[j] 最多 O(log(maxVal)) 个不同 AND 值。初始用全 1 掩码 (2^17-1) 作为 AND 恒等元。

时间复杂度：O(n * m * log(maxVal))，空间复杂度：O(m * log(maxVal))

## Solution

[SourceCode](./solution.js)
