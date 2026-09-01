# [813] Largest Sum of Averages

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-sum-of-averages/description/)

* algorithms
* Medium (54.93%)
* Likes:    2208
* Dislikes: 105
* Testcase Example:  '[9,1,2,3,9]\n3'

```md
You are given an integer array nums and an integer k. You can partition the array into at most k non-empty adjacent subarrays. The score of a partition is the sum of the averages of each subarray.
Note that the partition must use every integer in nums, and that the score is not necessarily an integer.
Return the maximum score you can achieve of all the possible partitions. Answers within 10-6 of the actual answer will be accepted.

Example 1:

Input: nums = [9,1,2,3,9], k = 3
Output: 20.00000
Explanation:
The best choice is to partition nums into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned nums into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.

Example 2:

Input: nums = [1,2,3,4,5,6,7], k = 4
Output: 20.50000


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 104
1 <= k <= nums.length


```

## 题目翻译

给定整数数组 nums 和整数 k，将数组分成最多 k 个非空相邻子数组。分数为各子数组平均值之和。返回最大分数。

## 解题思路

DP + 前缀和。dp[i][j] 表示前 i 个元素分成 j 组的最大分数。转移：dp[i][j] = max(dp[m][j-1] + avg(m+1..i))，其中 m < i。前缀和加速区间平均值计算。

## Solution

[SourceCode](./solution.js)
