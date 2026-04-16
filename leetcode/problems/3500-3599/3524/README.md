# [3524] Find X Value of Array I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-x-value-of-array-i/description/)

* algorithms
* Medium (37.34%)
* Likes:    85
* Dislikes: 31
* Testcase Example:  '[1,2,3,4,5]\n3'

```md
You are given an array of positive integers nums, and a positive integer k.
You are allowed to perform an operation once on nums, where in each operation you can remove any non-overlapping prefix and suffix from nums such that nums remains non-empty.
You need to find the x-value of nums, which is the number of ways to perform this operation so that the product of the remaining elements leaves a remainder of x when divided by k.
Return an array result of size k where result[x] is the x-value of nums for 0 <= x <= k - 1.
A prefix of an array is a subarray that starts from the beginning of the array and extends to any point within it.
A suffix of an array is a subarray that starts at any point within the array and extends to the end of the array.
Note that the prefix and suffix to be chosen for the operation can be empty.

Example 1:

Input: nums = [1,2,3,4,5], k = 3
Output: [9,2,4]
Explanation:

For x = 0, the possible operations include all possible ways to remove non-overlapping prefix/suffix that do not remove nums[2] == 3.
For x = 1, the possible operations are:

Remove the empty prefix and the suffix [2, 3, 4, 5]. nums becomes [1].
Remove the prefix [1, 2, 3] and the suffix [5]. nums becomes [4].


For x = 2, the possible operations are:

Remove the empty prefix and the suffix [3, 4, 5]. nums becomes [1, 2].
Remove the prefix [1] and the suffix [3, 4, 5]. nums becomes [2].
Remove the prefix [1, 2, 3] and the empty suffix. nums becomes [4, 5].
Remove the prefix [1, 2, 3, 4] and the empty suffix. nums becomes [5].




Example 2:

Input: nums = [1,2,4,8,16,32], k = 4
Output: [18,1,2,0]
Explanation:

For x = 0, the only operations that do not result in x = 0 are:

Remove the empty prefix and the suffix [4, 8, 16, 32]. nums becomes [1, 2].
Remove the empty prefix and the suffix [2, 4, 8, 16, 32]. nums becomes [1].
Remove the prefix [1] and the suffix [4, 8, 16, 32]. nums becomes [2].


For x = 1, the only possible operation is:

Remove the empty prefix and the suffix [2, 4, 8, 16, 32]. nums becomes [1].


For x = 2, the possible operations are:

Remove the empty prefix and the suffix [4, 8, 16, 32]. nums becomes [1, 2].
Remove the prefix [1] and the suffix [4, 8, 16, 32]. nums becomes [2].


For x = 3, there is no possible way to perform the operation.


Example 3:

Input: nums = [1,1,2,1,1], k = 2
Output: [9,6]


Constraints:

1 <= nums[i] <= 109
1 <= nums.length <= 105
1 <= k <= 5


```

## 中文翻译

给定正整数数组 nums 和正整数 k。可以执行一次操作：移除非空的前缀和后缀（保留中间非空子数组）。求每种余数 x (0 <= x < k) 的操作方案数。

## 解题思路

枚举所有子数组 nums[i..j]，其乘积 mod k 为 x。由于 k <= 5 很小，可以用 DP：遍历每个元素作为子数组右端点，维护当前所有左端点对应的乘积 mod k 的计数。对于新元素，从上一个状态转移：新余数 = (旧余数 * num) % k，加上单独取当前元素的方案。

## Solution

[SourceCode](./solution.js)
