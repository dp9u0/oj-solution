# [3599] Partition Array to Minimize XOR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-array-to-minimize-xor/description/)

* algorithms
* Medium (41.27%)
* Likes:    112
* Dislikes: 7
* Testcase Example:  '[1,2,3]\n2'

```md
You are given an integer array nums and an integer k.
Your task is to partition nums into k non-empty subarrays. For each subarray, compute the bitwise XOR of all its elements.
Return the minimum possible value of the maximum XOR among these k subarrays.

Example 1:

Input: nums = [1,2,3], k = 2
Output: 1
Explanation:
The optimal partition is [1] and [2, 3].

XOR of the first subarray is 1.
XOR of the second subarray is 2 XOR 3 = 1.

The maximum XOR among the subarrays is 1, which is the minimum possible.

Example 2:

Input: nums = [2,3,3,2], k = 3
Output: 2
Explanation:
The optimal partition is [2], [3, 3], and [2].

XOR of the first subarray is 2.
XOR of the second subarray is 3 XOR 3 = 0.
XOR of the third subarray is 2.

The maximum XOR among the subarrays is 2, which is the minimum possible.

Example 3:

Input: nums = [1,1,2,3,1], k = 2
Output: 0
Explanation:
The optimal partition is [1, 1] and [2, 3, 1].

XOR of the first subarray is 1 XOR 1 = 0.
XOR of the second subarray is 2 XOR 3 XOR 1 = 0.

The maximum XOR among the subarrays is 0, which is the minimum possible.


Constraints:

1 <= nums.length <= 250
1 <= nums[i] <= 109
1 <= k <= n


```

## 中文翻译

将数组分成 k 个非空子数组，计算每个子数组的异或值，返回最大异或值的最小可能值。

## 解题思路

DP：dp[i][j] 表示前 i 个元素分成 j 个子数组时的最小最大异或值。转移时枚举最后一个子数组的起始位置。

dp[i][j] = min over l of max(dp[l][j-1], xor(l+1, i))

预计算所有子数组的异或值。n <= 250，O(n^2 * k) 可行。

时间复杂度：O(n^2 * k)，空间复杂度：O(n * k)

## Solution

[SourceCode](./solution.js)
