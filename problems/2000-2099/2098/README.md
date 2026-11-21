# [2098] 长度为 K 的最大偶数和子序列

## Description


```md
https://leetcode.cn/problems/subsequence-of-size-k-with-the-largest-even-sum/description/
* algorithms
* Medium (36.62%)
* Likes:    12
* Dislikes: -
* Testcase Example:  '[4,1,5,3,1]\n3'
给你一个整数数组 nums 和一个整数 k 。找出 nums 长度为 k 的所有子序列中的 最大偶数和 。
返回此总和，如果此总和不存在，则返回 -1。
子序列 是一个数组，可以通过删除一些元素或不删除任何元素而从另一个数组派生，而不改变其余元素的顺序。

示例 1：
输入: nums = [4,1,5,3,1], k = 3
输出: 12
解释:
具有最大可能偶数和的子序列是[4,5,3]。它的和为 4 + 5 + 3 = 12
示例 2:
输入: nums = [4,6,2], k = 3
输出: 12
解释:
具有最大可能偶数和的子序列是[4,6,2]。它的和为 4 + 6 + 2 = 12
示例 3:
输入: nums = [1,3,5], k = 1
输出: -1
解释:
长度为 1 的 NUM 的子序列没有偶数和。

Constraints:
1 <= nums.length <= 105
0 <= nums[i] <= 105
1 <= k <= nums.length
Hint 1: Is the sum of two even numbers even or odd? How about two odd numbers? One odd number and one even number?
Hint 2: If there is an even number of odd numbers, the sum will be even and vice versa.
Hint 3: Create an integer array to store all the even numbers in nums and another array to store all the odd numbers in nums. Sort both arrays.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an integer array `nums` and an integer `k`, return the maximum possible even sum of a subsequence of size `k`, or -1 if none exists.

Example 1:
Input: nums = [4,1,5,3,1], k = 3
Output: 12

Example 2:
Input: nums = [4,6,2], k = 3
Output: 12

Example 3:
Input: nums = [1,3,5], k = 1
Output: -1

Constraints: 1 <= nums.length <= 10^5, 0 <= nums[i] <= 10^5, 1 <= k <= nums.length.

## Approach

A subsequence sum is even iff it contains an even number of odd values. Sort odds and evens separately in descending order with prefix sums `preO`, `preE`. The best sum using exactly `a` odds and `k - a` evens is `preO[a] + preE[k - a]` (top elements). Enumerate `a` from `max(0, k - #even)` to `min(k, #odd)` with `a` even; take the maximum.

Time O(n log n).
