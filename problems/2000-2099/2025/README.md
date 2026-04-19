# [2025] Maximum Number of Ways to Partition an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/description/)

* algorithms
* Hard (35.64%)
* Likes:    521
* Dislikes: 59
* Testcase Example:  '[2,-1,2]\n3'

```md
You are given a 0-indexed integer array nums of length n. The number of ways to partition nums is the number of pivot indices that satisfy both conditions:

1 <= pivot < n
nums[0] + nums[1] + ... + nums[pivot - 1] == nums[pivot] + nums[pivot + 1] + ... + nums[n - 1]

You are also given an integer k. You can choose to change the value of one element of nums to k, or to leave the array unchanged.
Return the maximum possible number of ways to partition nums to satisfy both conditions after changing at most one element.

Example 1:

Input: nums = [2,-1,2], k = 3
Output: 1
Explanation: One optimal approach is to change nums[0] to k. The array becomes [3,-1,2].
There is one way to partition the array:
- For pivot = 2, we have the partition [3,-1
2]: 3 + -1 == 2.

Example 2:

Input: nums = [0,0,0], k = 1
Output: 2
Explanation: The optimal approach is to leave the array unchanged.
There are two ways to partition the array:
- For pivot = 1, we have the partition [0
0,0]: 0 == 0 + 0.
- For pivot = 2, we have the partition [0,0
0]: 0 + 0 == 0.

Example 3:

Input: nums = [22,4,-25,-20,-15,15,-16,7,19,-10,0,-13,-14], k = -33
Output: 4
Explanation: One optimal approach is to change nums[2] to k. The array becomes [22,4,-33,-20,-15,15,-16,7,19,-10,0,-13,-14].
There are four ways to partition the array.


Constraints:

n == nums.length
2 <= n <= 105
-105 <= k, nums[i] <= 105


```

## 题目翻译

给定数组nums和整数k，可以将nums中某个元素改为k或不改。求最多能有几个pivot(1<=pivot<n)使得pivot左侧之和等于右侧之和。

## 解题思路

令prefix[p] = sum(nums[0..p-1])，则pivot=p满足条件等价于 prefix[p] = total/2，即 total - 2*prefix[p] = 0。

不改任何元素时，统计满足 total - 2*prefix[p] = 0 的pivot数。

改nums[i]为k时，total变为 total + (k - nums[i]) = total + diff。对于pivot <= i，prefix不变，条件变为 total + diff - 2*prefix[p] = 0，即 total - 2*prefix[p] = -diff。对于pivot > i，prefix[p]也变了 +diff，条件变为 total + diff - 2*(prefix[p] + diff) = 0，即 total - 2*prefix[p] = diff。

所以：对每个i，改nums[i]为k后，有效pivot数 = (pivot<=i中 total-2*prefix[p]=-diff的个数) + (pivot>i中 total-2*prefix[p]=diff的个数)。

用两个HashMap：left记录pivot在[1..i]的freq，right记录pivot在[i+1..n-1]的freq。枚举每个i，O(1)查询。

## Solution

[SourceCode](./solution.js)
