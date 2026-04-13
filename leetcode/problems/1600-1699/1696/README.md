# [1696] Jump Game VI

## Description

[LeetCode Problem Description](https://leetcode.com/problems/jump-game-vi/description/)

* algorithms
* Medium (46.38%)
* Likes:    3566
* Dislikes: 126
* Testcase Example:  '[1,-1,-2,4,-7,3]\n2'

```md
You are given a 0-indexed integer array nums and an integer k.
You are initially standing at index 0. In one move, you can jump at most k steps forward without going outside the boundaries of the array. That is, you can jump from index i to any index in the range [i + 1, min(n - 1, i + k)] inclusive.
You want to reach the last index of the array (index n - 1). Your score is the sum of all nums[j] for each index j you visited in the array.
Return the maximum score you can get.

Example 1:

Input: nums = [1,-1,-2,4,-7,3], k = 2
Output: 7
Explanation: You can choose your jumps forming the subsequence [1,-1,4,3] (underlined above). The sum is 7.

Example 2:

Input: nums = [10,-5,-2,4,0,3], k = 3
Output: 17
Explanation: You can choose your jumps forming the subsequence [10,4,3] (underlined above). The sum is 17.

Example 3:

Input: nums = [1,-5,-20,4,-1,3,-6,-3], k = 2
Output: 0


Constraints:

1 <= nums.length, k <= 105
-104 <= nums[i] <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 nums 和整数 k，从索引 0 出发，每次最多跳 k 步前进。到达最后一个索引时，得分 = 经过所有位置 nums[j] 的和。返回最大得分。

## 解题思路

**DP + 单调队列**

1. dp[i] 表示到达位置 i 的最大得分
2. dp[i] = nums[i] + max(dp[j])，其中 i-k <= j < i
3. 用单调递减队列维护窗口 [i-k, i-1] 内的 dp 最大值
4. 队首即为当前窗口最大值，弹出超出窗口的元素

时间复杂度 O(n)，空间复杂度 O(n)。
