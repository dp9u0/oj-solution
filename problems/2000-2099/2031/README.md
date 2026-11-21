# [2031] 1 比 0 多的子数组个数

## Description


```md
https://leetcode.cn/problems/count-subarrays-with-more-ones-than-zeros/description/
* algorithms
* Medium (53.71%)
* Likes:    25
* Dislikes: -
* Testcase Example:  '[0,1,1,0,1]'
给你一个只包含 0 和 1 的数组 nums，请返回 1 的数量 大于 0 的数量的子数组的个数。由于答案可能很大，请返回答案对 109 + 7 取余 的结果。
一个 子数组 指的是原数组中连续的一个子序列。

示例 1:
输入: nums = [0,1,1,0,1]
输出: 9
解释:
长度为 1 的、1 的数量大于 0 的数量的子数组有: [1], [1], [1]
长度为 2 的、1 的数量大于 0 的数量的子数组有: [1,1]
长度为 3 的、1 的数量大于 0 的数量的子数组有: [0,1,1], [1,1,0], [1,0,1]
长度为 4 的、1 的数量大于 0 的数量的子数组有: [1,1,0,1]
长度为 5 的、1 的数量大于 0 的数量的子数组有: [0,1,1,0,1]
示例 2:
输入: nums = [0]
输出: 0
解释:
没有子数组的 1 的数量大于 0 的数量。
示例 3:
输入: nums = [1]
输出: 1
解释:
长度为 1 的、1 的数量大于 0 的数量的子数组有: [1]

提示:
1 <= nums.length <= 105
0 <= nums[i] <= 1
Hint 1: Change the zeros in nums to -1 and create a prefix sum array prefixSum using the new nums.
Hint 2: If prefixSum[i] for any index i in the range 0 <= i < prefixSum.length is positive, that means that there are more ones than zeros in the prefix ending at index i.
Hint 3: If prefixSum[j] > prefixSum[i] for two indexes i and j such that 0 <= i < j < prefixSum.length, that means that there are more ones than zeros in nums in the range [i + 1 : j] (inclusive)

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a binary array `nums`, count the subarrays where the number of 1s exceeds the number of 0s. Return the count modulo 10^9 + 7.

Example 1:
Input: nums = [0,1,1,0,1]
Output: 9

Example 2:
Input: nums = [0]
Output: 0

Example 3:
Input: nums = [1]
Output: 1

Constraints: 1 <= nums.length <= 10^5, nums[i] in {0, 1}.

## Approach

Map 0 to -1 and let `s` be the prefix sums. A subarray `(i, j]` qualifies iff `s[j] > s[i]`, so the answer is the number of index pairs `i < j` with `s[i] < s[j]`.

Scan left to right keeping a Fenwick tree (values shifted by an offset since sums range from -n to n); at each position add the count of previously inserted prefix values strictly below the current one, then insert it. Accumulate modulo 1e9 + 7.

Time O(n log n).
