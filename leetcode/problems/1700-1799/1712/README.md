# [1712] Ways to Split Array Into Three Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/description/)

* algorithms
* Medium (34.22%)
* Likes:    1509
* Dislikes: 112
* Testcase Example:  '[1,1,1]'

```md
A split of an integer array is good if:

The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements in mid is less than or equal to the sum of the elements in right.

Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7.

Example 1:

Input: nums = [1,1,1]
Output: 1
Explanation: The only good way to split nums is [1] [1] [1].
Example 2:

Input: nums = [1,2,2,2,5,0]
Output: 3
Explanation: There are three good ways of splitting nums:
[1] [2] [2,2,5,0]
[1] [2,2] [2,5,0]
[1,2] [2,2] [5,0]

Example 3:

Input: nums = [3,2,1]
Output: 0
Explanation: There is no good way to split nums.

Constraints:

3 <= nums.length <= 105
0 <= nums[i] <= 104


```

## 中文翻译

将非负整数数组分成三个非空连续子数组 left, mid, right，要求 sum(left) <= sum(mid) <= sum(right)。返回方案数 mod 10^9+7。

## 解题思路

前缀和 + 双指针。先算前缀和。固定第一个分割点 i，left = prefix[i]。mid 至少等于 left，即 prefix[j] >= 2*prefix[i]。right 至少等于 mid，即 prefix[n] - prefix[j] >= prefix[j]，即 j <= (prefix[n] + prefix[i]) / 2。用二分找 j 的下界和上界，累计方案数。

## Solution

[SourceCode](./solution.js)
