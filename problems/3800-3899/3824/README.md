# [3824] Minimum K to Reduce Array Within Limit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-k-to-reduce-array-within-limit/description/)

* algorithms
* Medium (41.09%)
* Likes:    66
* Dislikes: 3
* Testcase Example:  '[3,7,5]'

```md
You are given a positive integer array nums.
For a positive integer k, define nonPositive(nums, k) as the minimum number of operations needed to make every element of nums non-positive. In one operation, you can choose an index i and reduce nums[i] by k.
Return an integer denoting the minimum value of k such that nonPositive(nums, k) <= k2.

Example 1:

Input: nums = [3,7,5]
Output: 3
Explanation:
When k = 3, nonPositive(nums, k) = 6 <= k2.

Reduce nums[0] = 3 one time. nums[0] becomes 3 - 3 = 0.
Reduce nums[1] = 7 three times. nums[1] becomes 7 - 3 - 3 - 3 = -2.
Reduce nums[2] = 5 two times. nums[2] becomes 5 - 3 - 3 = -1.


Example 2:

Input: nums = [1]
Output: 1
Explanation:
When k = 1, nonPositive(nums, k) = 1 <= k2.

Reduce nums[0] = 1 one time. nums[0] becomes 1 - 1 = 0.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 翻译

给定正整数数组 nums，每次操作选一个下标 i 将 nums[i] 减 k。nonPositive(nums, k) 是使所有元素 ≤ 0 所需的最少操作数。找最小的 k 使得 nonPositive(nums, k) ≤ k^2。

## 解题思路

对于给定的 k，每个元素 nums[i] 需要 ceil(nums[i] / k) 次操作。总操作数 = sum(ceil(nums[i] / k))。我们需要 sum(ceil(nums[i] / k)) ≤ k^2。

二分答案 k。k 的范围是 1 到 max(nums)（k ≥ max(nums) 时每个元素只需 1 次操作，总数 = n ≤ max(nums)^2）。check 函数计算总操作数并与 k^2 比较。时间复杂度 O(n * log(max))。

## Solution

[SourceCode](./solution.js)
