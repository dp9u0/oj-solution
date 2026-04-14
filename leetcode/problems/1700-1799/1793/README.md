# [1793] Maximum Score of a Good Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-of-a-good-subarray/description/)

* algorithms
* Hard (64.36%)
* Likes:    2009
* Dislikes: 50
* Testcase Example:  '[1,4,3,7,4,5]\n3'

```md
You are given an array of integers nums (0-indexed) and an integer k.
The score of a subarray (i, j) is defined as min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1). A good subarray is a subarray where i <= k <= j.
Return the maximum possible score of a good subarray.

Example 1:

Input: nums = [1,4,3,7,4,5], k = 3
Output: 15
Explanation: The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15.

Example 2:

Input: nums = [5,5,4,5,4,1,1,1], k = 0
Output: 20
Explanation: The optimal subarray is (0, 4) with a score of min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 2 * 104
0 <= k < nums.length


```

## 翻译

给定整数数组 nums 和整数 k。子数组 (i, j) 的分数为 min(nums[i..j]) * (j-i+1)。好子数组必须满足 i <= k <= j。返回好子数组的最大分数。

## Approach

双指针从 k 向两侧扩展。维护当前窗口最小值 minVal 和窗口 [left, right]。

每步比较 nums[left-1] 和 nums[right+1]，选择较大的那边扩展（减少对最小值的影响），更新 minVal，计算分数。

贪心正确性：选择更大的边界元素能保持较高的最小值。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
