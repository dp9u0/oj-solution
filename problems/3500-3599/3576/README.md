# [3576] Transform Array to All Equal Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/transform-array-to-all-equal-elements/description/)

* algorithms
* Medium (33.14%)
* Likes:    98
* Dislikes: 8
* Testcase Example:  '[1,-1,1,-1,1]\n3'

```md
You are given an integer array nums of size n containing only 1 and -1, and an integer k.
You can perform the following operation at most k times:


Choose an index i (0 <= i < n - 1), and multiply both nums[i] and nums[i + 1] by -1.


Note that you can choose the same index i more than once in different operations.
Return true if it is possible to make all elements of the array equal after at most k operations, and false otherwise.

Example 1:

Input: nums = [1,-1,1,-1,1], k = 3
Output: true
Explanation:
We can make all elements in the array equal in 2 operations as follows:

Choose index i = 1, and multiply both nums[1] and nums[2] by -1. Now nums = [1,1,-1,-1,1].
Choose index i = 2, and multiply both nums[2] and nums[3] by -1. Now nums = [1,1,1,1,1].


Example 2:

Input: nums = [-1,-1,-1,1,1,1], k = 5
Output: false
Explanation:
It is not possible to make all array elements equal in at most 5 operations.


Constraints:

1 <= n == nums.length <= 105
nums[i] is either -1 or 1.
1 <= k <= n


```

## 中文翻译

给定一个只包含 1 和 -1 的数组 nums 和整数 k。每次操作可以选择下标 i，将 nums[i] 和 nums[i+1] 同时乘以 -1。问能否在最多 k 次操作内使所有元素相等。

## 解题思路

贪心。尝试将所有元素变为 1 或变为 -1。从左到右扫描，用 flip 变量记录当前位置是否被上一次操作影响。如果当前值不等于目标值，则在该位置执行翻转，并将 flip 置为 true；否则置为 false。最后检查末尾元素是否满足目标值。取两种目标中操作次数较小的，判断是否 ≤ k。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
