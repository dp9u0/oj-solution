# [1224] Maximum Equal Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-equal-frequency/description/)

* algorithms
* Hard (38.13%)
* Likes:    568
* Dislikes: 68
* Testcase Example:  '[2,2,1,1,5,3,3,5]'

```md
Given an array nums of positive integers, return the longest possible length of an array prefix of nums, such that it is possible to remove exactly one element from this prefix so that every number that has appeared in it will have the same number of occurrences.
If after removing one element there are no remaining elements, it&#39;s still considered that every appeared number has the same number of ocurrences (0).

Example 1:

Input: nums = [2,2,1,1,5,3,3,5]
Output: 7
Explanation: For the subarray [2,2,1,1,5,3,3] of length 7, if we remove nums[4] = 5, we will get [2,2,1,1,3,3], so that each number will appear exactly twice.

Example 2:

Input: nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]
Output: 13


Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 中文翻译

求最长前缀，使得从中恰好删除一个元素后，所有出现过的数字频率相同。

## 解题思路

**频率统计**

维护 freq[x]（x的频率）和 countFreq[f]（频率为f的数字个数）。遍历前缀，每次检查三种有效情况：

1. 所有数字频率都为1（删任意一个）
2. 只有一种频率，且只出现一个数字（删一个即可）
3. 两种频率：高频 = 低频+1 且高频仅1个数字（删该数字一个）或低频=1 且仅1个数字（删该数字）

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
