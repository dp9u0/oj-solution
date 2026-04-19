# [3826] Minimum Partition Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-partition-score/description/)

* algorithms
* Hard (33.83%)
* Likes:    52
* Dislikes: 3
* Testcase Example:  '[5,1,2,1]\n2'

```md
You are given an integer array nums and an integer k.
Your task is to partition nums into exactly k subarrays and return an integer denoting the minimum possible score among all valid partitions.
The score of a partition is the sum of the values of all its subarrays.
The value of a subarray is defined as sumArr * (sumArr + 1) / 2, where sumArr is the sum of its elements.

Example 1:

Input: nums = [5,1,2,1], k = 2
Output: 25
Explanation:

We must partition the array into k = 2 subarrays. One optimal partition is [5] and [1, 2, 1].
The first subarray has sumArr = 5 and value = 5 &times; 6 / 2 = 15.
The second subarray has sumArr = 1 + 2 + 1 = 4 and value = 4 &times; 5 / 2 = 10.
The score of this partition is 15 + 10 = 25, which is the minimum possible score.


Example 2:

Input: nums = [1,2,3,4], k = 1
Output: 55
Explanation:

Since we must partition the array into k = 1 subarray, all elements belong to the same subarray: [1, 2, 3, 4].
This subarray has sumArr = 1 + 2 + 3 + 4 = 10 and value = 10 &times; 11 / 2 = 55.​​​​​​​
The score of this partition is 55, which is the minimum possible score.


Example 3:

Input: nums = [1,1,1], k = 3
Output: 3
Explanation:

We must partition the array into k = 3 subarrays. The only valid partition is [1], [1], [1].
Each subarray has sumArr = 1 and value = 1 &times; 2 / 2 = 1.
The score of this partition is 1 + 1 + 1 = 3, which is the minimum possible score.



Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 104
1 <= k <= nums.length


```

## 题目翻译

给定数组 nums 和整数 k，将数组恰好分成 k 个连续子数组。每个子数组的值为 sum*(sum+1)/2。分数为所有子数组值之和。返回最小分数。

## 解题思路

**分治 DP 优化**

f(x) = x*(x+1)/2 是凸函数。DP 转移：dp[j][i] = min over m: dp[j-1][m] + f(P[i]-P[m])。

由于 f 凸，满足四边形不等式，最优分割点单调，可用分治优化。

每层 O(n log n)，共 k 层。总 O(n·k·log n)。

## Solution

[SourceCode](./solution.js)
