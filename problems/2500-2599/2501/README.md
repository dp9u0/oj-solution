# [2501] Longest Square Streak in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-square-streak-in-an-array/description/)

* algorithms
* Medium (53.09%)
* Likes:    1009
* Dislikes: 34
* Testcase Example:  '[4,3,6,16,8,2]'

```md
You are given an integer array nums. A subsequence of nums is called a square streak if:

The length of the subsequence is at least 2, and
after sorting the subsequence, each element (except the first element) is the square of the previous number.

Return the length of the longest square streak in nums, or return -1 if there is no square streak.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: nums = [4,3,6,16,8,2]
Output: 3
Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
- 4 = 2 * 2.
- 16 = 4 * 4.
Therefore, [4,16,2] is a square streak.
It can be shown that every subsequence of length 4 is not a square streak.

Example 2:

Input: nums = [2,3,5,6,7]
Output: -1
Explanation: There is no square streak in nums so return -1.


Constraints:

2 <= nums.length <= 105
2 <= nums[i] <= 105


```

## 翻译

给定整数数组 `nums`，一个"平方序列"是指排序后每个元素都是前一个元素的平方（如 [2, 4, 16]）。返回最长平方序列的长度，不存在则返回 -1。

## Approach

去重排序后，用哈希集合存储所有数。从小到大遍历，对每个数 x，如果 x 的平方根是整数且存在于集合中，则跳过（从更小的数开始计算）。否则从 x 开始，不断平方查找后续数，计算链长。

也可以用 DP 思路：对排序后的每个数 x，检查 sqrt(x) 是否为整数且存在于集合中，若存在则 dp[x] = dp[sqrt(x)] + 1。

时间复杂度 O(n log log maxVal)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
