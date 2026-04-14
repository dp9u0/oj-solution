# [1296] Divide Array in Sets of K Consecutive Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/description/)

* algorithms
* Medium (59.18%)
* Likes:    1992
* Dislikes: 118
* Testcase Example:  '[1,2,3,3,4,4,5,6]\n4'

```md
Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers.
Return true if it is possible. Otherwise, return false.

Example 1:

Input: nums = [1,2,3,3,4,4,5,6], k = 4
Output: true
Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].

Example 2:

Input: nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
Output: true
Explanation: Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].

Example 3:

Input: nums = [1,2,3,4], k = 3
Output: false
Explanation: Each array should be divided in subarrays of size 3.


Constraints:

1 <= k <= nums.length <= 105
1 <= nums[i] <= 109


Note: This question is the same as846:https://leetcode.com/problems/hand-of-straights/

```

## 翻译

给定整数数组 nums 和正整数 k，判断能否将数组分成若干组，每组恰好 k 个连续整数。

## Approach

排序 + HashMap 计数。先统计每个数的频次，按升序遍历。对每个还有剩余次数的数 x，尝试消耗 x, x+1, ..., x+k-1 各一个。如果任何一步不够用，返回 false。

时间复杂度 O(n log n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
