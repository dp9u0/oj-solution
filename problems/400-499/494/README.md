# [494] Target Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/target-sum/description/)

* algorithms
* Medium (52.05%)
* Likes:    12402
* Dislikes: 416
* Testcase Example:  '[1,1,1,1,1]\n3'

```md
You are given an integer array nums and an integer target.
You want to build an expression out of nums by adding one of the symbols &#39;+&#39; and &#39;-&#39; before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a &#39;+&#39; before 2 and a &#39;-&#39; before 1 and concatenate them to build the expression '+2-1'.

Return the number of different expressions that you can build, which evaluates to target.

Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

Example 2:

Input: nums = [1], target = 1
Output: 1


Constraints:

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和目标值 target，在每个数前添加 '+' 或 '-'，使得表达式结果等于 target。返回不同表达式的数量。

## 解题思路

**0-1 背包 / 子集和 DP**

将问题转化为：把 nums 分成两组，正数组 P 和负数组 N，使得 sum(P) - sum(N) = target。
又 sum(P) + sum(N) = sum(nums)，所以 2 * sum(P) = target + sum(nums)，即 sum(P) = (target + total) / 2。

问题转化为：从 nums 中选若干数使其和恰好为 (target + total) / 2 的方案数。这就是经典的 0-1 背包求方案数问题。

用一维 DP：dp[j] = dp[j] + dp[j - nums[i]]（倒序遍历 j）。

注意：(target + total) 必须为非负偶数，否则返回 0。

时间复杂度 O(n * sum)，空间复杂度 O(sum)。
