# [1655] Distribute Repeating Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distribute-repeating-integers/description/)

* algorithms
* Hard (40.57%)
* Likes:    471
* Dislikes: 31
* Testcase Example:  '[1,2,3,4]\n[2]'

```md
You are given an array of n integers, nums, where there are at most 50 unique values in the array. You are also given an array of m customer order quantities, quantity, where quantity[i] is the amount of integers the ith customer ordered. Determine if it is possible to distribute nums such that:

The ith customer gets exactly quantity[i] integers,
The integers the ith customer gets are all equal, and
Every customer is satisfied.

Return true if it is possible to distribute nums according to the above conditions.

Example 1:

Input: nums = [1,2,3,4], quantity = [2]
Output: false
Explanation: The 0th customer cannot be given two different integers.

Example 2:

Input: nums = [1,2,3,3], quantity = [2]
Output: true
Explanation: The 0th customer is given [3,3]. The integers [1,2] are not used.

Example 3:

Input: nums = [1,1,2,2], quantity = [2,2]
Output: true
Explanation: The 0th customer is given [1,1], and the 1st customer is given [2,2].


Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= 1000
m == quantity.length
1 <= m <= 10
1 <= quantity[i] <= 105
There are at most 50 unique values in nums.


```

## 题目翻译

给定数组 nums（至多 50 种不同值）和 m 个顾客的订单量 quantity（m <= 10）。每个顾客需要 quantity[i] 个相同的整数。判断是否能满足所有顾客。

## 解题思路

**Bitmask DP + 子集枚举**

m <= 10，用 bitmask 表示顾客子集。预处理每个子集的 quantity 之和。

dp[mask] 表示顾客子集 mask 是否能被满足。逐个值 v（按频率降序）尝试：对每个已满足的 mask，枚举剩余顾客的所有子集 sub，若 sub 的 quantity 之和 <= cnt[v]，则 mask|sub 也可满足。

复杂度：O(numValues * 3^m)，m=10 时约 3M 次操作。

## Solution

[SourceCode](./solution.js)
