# [1673] Find the Most Competitive Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-most-competitive-subsequence/description/)

* algorithms
* Medium (52.80%)
* Likes:    2183
* Dislikes: 106
* Testcase Example:  '[3,5,2,6]\n2'

```md
Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.
An array&#39;s subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.
We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5.

Example 1:

Input: nums = [3,5,2,6], k = 2
Output: [2,6]
Explanation: Among the set of every possible subsequence: {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]}, [2,6] is the most competitive.

Example 2:

Input: nums = [2,4,3,3,5,4,9,6], k = 4
Output: [2,3,3,4]


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
1 <= k <= nums.length


```

## 翻译

找长度为k的字典序最小子序列（最竞争子序列）。

## 解题思路

单调栈。遍历数组，当栈顶>当前元素且剩余元素足够填满k个时弹出，最后取前k个。

## Solution

[SourceCode](./solution.js)
