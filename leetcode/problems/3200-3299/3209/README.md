# [3209] Number of Subarrays With AND Value of K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/description/)

* algorithms
* Hard (35.18%)
* Likes:    173
* Dislikes: 8
* Testcase Example:  '[1,1,1]\n1'

```md
Given an array of integers nums and an integer k, return the number of subarrays of nums where the bitwise AND of the elements of the subarray equals k.

Example 1:

Input: nums = [1,1,1], k = 1
Output: 6
Explanation:
All subarrays contain only 1&#39;s.

Example 2:

Input: nums = [1,1,2], k = 1
Output: 3
Explanation:
Subarrays having an AND value of 1 are: [1,1,2], [1,1,2], [1,1,2].

Example 3:

Input: nums = [1,2,3], k = 2
Output: 2
Explanation:
Subarrays having an AND value of 2 are: [1,2,3], [1,2,3].


Constraints:

1 <= nums.length <= 105
0 <= nums[i], k <= 109


```

## 中文翻译

给定整数数组 nums 和整数 k，返回其中所有元素的按位与等于 k 的子数组个数。

约束：n <= 10^5, nums[i], k <= 10^9

## 解题思路

**滑动窗口 AND 集合**

1. 对每个位置 i，维护以 i 结尾的所有子数组的 AND 值集合（去重计数）。
2. 由于 AND 运算单调递减，每个位置的不同 AND 值数量为 O(log(maxVal))。
3. 遍历数组，对每个新元素更新 AND 集合并累加等于 k 的计数。
4. 时间 O(n * log(maxVal))。

## Solution

[SourceCode](./solution.js)
