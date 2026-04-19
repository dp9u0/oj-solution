# [2856] Minimum Array Length After Pair Removals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-array-length-after-pair-removals/description/)

* algorithms
* Medium (27.32%)
* Likes:    425
* Dislikes: 108
* Testcase Example:  '[1,2,3,4]'

```md
Given an integer array num sorted in non-decreasing order.
You can perform the following operation any number of times:

Choose two indices, i and j, where nums[i] < nums[j].
Then, remove the elements at indices i and j from nums. The remaining elements retain their original order, and the array is re-indexed.

Return the minimum length of nums after applying the operation zero or more times.

Example 1:

Input: nums = [1,2,3,4]
Output: 0
Explanation:


Example 2:

Input: nums = [1,1,2,2,3,3]
Output: 0
Explanation:


Example 3:

Input: nums = [1000000000,1000000000]
Output: 2
Explanation:
Since both numbers are equal, they cannot be removed.

Example 4:

Input: nums = [2,3,4,4,4]
Output: 1
Explanation:



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
nums is sorted in non-decreasing order.


```

## 中文翻译

给定非降序数组 nums，每次选两个不同值的元素删除。求最少剩余元素数。

## 解题思路

统计频率最高的元素出现次数 maxFreq。如果 maxFreq > n/2，则这些元素无法全部配对，剩余 maxFreq - (n - maxFreq) = 2*maxFreq - n。否则全部配对，剩余 n%2。

## Solution

[SourceCode](./solution.js)
