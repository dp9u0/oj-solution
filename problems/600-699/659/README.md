# [659] Split Array into Consecutive Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-array-into-consecutive-subsequences/description/)

* algorithms
* Medium (52.09%)
* Likes:    4583
* Dislikes: 817
* Testcase Example:  '[1,2,3,3,4,5]'

```md
You are given an integer array nums that is sorted in non-decreasing order.
Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true:

Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more than the previous integer).
All subsequences have a length of 3 or more.

Return true if you can split nums according to the above conditions, or false otherwise.
A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).

Example 1:

Input: nums = [1,2,3,3,4,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,5] --> 1, 2, 3
[1,2,3,3,4,5] --> 3, 4, 5

Example 2:

Input: nums = [1,2,3,3,4,4,5,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,4,5,5] --> 1, 2, 3, 4, 5
[1,2,3,3,4,4,5,5] --> 3, 4, 5

Example 3:

Input: nums = [1,2,3,4,4,5]
Output: false
Explanation: It is impossible to split nums into consecutive increasing subsequences of length 3 or more.


Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
nums is sorted in non-decreasing order.


```

## 翻译

给定非递减数组 nums，判断能否将其分成若干子序列，每个子序列是长度 >= 3 的连续递增序列。

## Approach

贪心。用两个 Map：freq 记录剩余可用次数，need 记录以某数结尾的子序列需要多少个后继。

遍历每个数 x：
1. 如果 freq[x] == 0，跳过
2. 如果 need[x] > 0，优先接到已有子序列末尾
3. 否则尝试开新序列 x, x+1, x+2
4. 都不行则返回 false

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
