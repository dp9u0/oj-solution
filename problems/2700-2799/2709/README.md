# [2709] Greatest Common Divisor Traversal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/greatest-common-divisor-traversal/description/)

* algorithms
* Hard (41.77%)
* Likes:    864
* Dislikes: 144
* Testcase Example:  '[2,3,6]'

```md
You are given a 0-indexed integer array nums, and you are allowed to traverse between its indices. You can traverse between index i and index j, i != j, if and only if gcd(nums[i], nums[j]) > 1, where gcd is the greatest common divisor.
Your task is to determine if for every pair of indices i and j in nums, where i < j, there exists a sequence of traversals that can take us from i to j.
Return true if it is possible to traverse between all such pairs of indices, or false otherwise.

Example 1:

Input: nums = [2,3,6]
Output: true
Explanation: In this example, there are 3 possible pairs of indices: (0, 1), (0, 2), and (1, 2).
To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2 -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
To go from index 0 to index 2, we can just go directly because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1.

Example 2:

Input: nums = [3,9,5]
Output: false
Explanation: No sequence of traversals can take us from index 0 to index 2 in this example. So, we return false.

Example 3:

Input: nums = [4,3,12,8]
Output: true
Explanation: There are 6 possible pairs of indices to traverse between: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), and (2, 3). A valid sequence of traversals exists for each pair, so we return true.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 翻译

给定数组 nums，下标 i 和 j 之间可通行当且仅当 gcd(nums[i], nums[j]) > 1。判断所有下标对是否连通。

## 解题思路

将每个下标与其所有质因子连边，问题转化为：按质因子分组，同组下标 union。最后检查所有下标是否在同一连通分量。用筛法求最小质因子加速分解。O(n log V)。

## Solution

[SourceCode](./solution.js)
