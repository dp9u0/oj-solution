# [2183] Count Array Pairs Divisible by K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-array-pairs-divisible-by-k/description/)

* algorithms
* Hard (30.63%)
* Likes:    929
* Dislikes: 39
* Testcase Example:  '[1,2,3,4,5]\n2'

```md
Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) such that:

0 <= i < j <= n - 1 and
nums[i] * nums[j] is divisible by k.


Example 1:

Input: nums = [1,2,3,4,5], k = 2
Output: 7
Explanation:
The 7 pairs of indices whose corresponding products are divisible by 2 are
(0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4).
Their products are 2, 4, 6, 8, 10, 12, and 20 respectively.
Other pairs such as (0, 2) and (2, 4) have products 3 and 15 respectively, which are not divisible by 2.

Example 2:

Input: nums = [1,2,3,4], k = 5
Output: 0
Explanation: There does not exist any pair of indices whose corresponding product is divisible by 5.


Constraints:

1 <= nums.length <= 105
1 <= nums[i], k <= 105


```

## 翻译

给定数组 nums 和整数 k，求满足 i < j 且 nums[i]*nums[j] 能被 k 整除的数对数。

## 解题思路

k|nums[i]*nums[j] 等价于 (k/gcd(nums[i],k)) | gcd(nums[j],k)。枚举 k 的所有因子 d，维护已见元素中 gcd(nums[j],k)=d 的计数。对每个 nums[i]，算 need=k/gcd(nums[i],k)，在因子中找 need 的倍数求和。O(n·d(k))，d(k) ≤ 128。

## Solution

[SourceCode](./solution.js)
