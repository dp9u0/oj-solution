# [2615] Sum of Distances

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-distances/description/)

* algorithms
* Medium (32.58%)
* Likes:    840
* Dislikes: 98
* Testcase Example:  '[1,3,1,1,2]'

```md
You are given a 0-indexed integer array nums. There exists an array arr of length nums.length, where arr[i] is the sum of
i - j
over all j such that nums[j] == nums[i] and j != i. If there is no such j, set arr[i] to be 0.
Return the array arr.

Example 1:

Input: nums = [1,3,1,1,2]
Output: [5,0,3,4,0]
Explanation:
When i = 0, nums[0] == nums[2] and nums[0] == nums[3]. Therefore, arr[0] =
0 - 2
+
0 - 3
= 5.
When i = 1, arr[1] = 0 because there is no other index with value 3.
When i = 2, nums[2] == nums[0] and nums[2] == nums[3]. Therefore, arr[2] =
2 - 0
+
2 - 3
= 3.
When i = 3, nums[3] == nums[0] and nums[3] == nums[2]. Therefore, arr[3] =
3 - 0
+
3 - 2
= 4.
When i = 4, arr[4] = 0 because there is no other index with value 2.

Example 2:

Input: nums = [0,5,3]
Output: [0,0,0]
Explanation: Since each element in nums is distinct, arr[i] = 0 for all i.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109


Note: This question is the same as  2121: Intervals Between Identical Elements.

```

## 题目翻译

给定数组 nums，对每个 i，计算 arr[i] = sum(|i - j|) 对所有 nums[j] == nums[i] 且 j != i 的 j。返回 arr。

## 解题思路

按值分组，每组内排序索引。对每组用前缀和优化：对排序后的索引 positions，arr[i] = i * positions[k] - prefixSum[0..k-1] + prefixSum[k+1..end] - (len - k - 1) * positions[k]。前缀和预处理后 O(1) 计算每个位置。

## Solution

[SourceCode](./solution.js)
