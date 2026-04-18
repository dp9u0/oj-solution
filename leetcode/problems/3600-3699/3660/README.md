# [3660] Jump Game IX

## Description

[LeetCode Problem Description](https://leetcode.com/problems/jump-game-ix/description/)

* algorithms
* Medium (24.03%)
* Likes:    185
* Dislikes: 14
* Testcase Example:  '[2,1,3]'

```md
You are given an integer array nums.
From any index i, you can jump to another index j under the following rules:

Jump to index j where j > i is allowed only if nums[j] < nums[i].
Jump to index j where j < i is allowed only if nums[j] > nums[i].

For each index i, find the maximum value in nums that can be reached by following any sequence of valid jumps starting at i.
Return an array ans where ans[i] is the maximum value reachable starting from index i.

Example 1:

Input: nums = [2,1,3]
Output: [2,2,3]
Explanation:

For i = 0: No jump increases the value.
For i = 1: Jump to j = 0 as nums[j] = 2 is greater than nums[i].
For i = 2: Since nums[2] = 3 is the maximum value in nums, no jump increases the value.

Thus, ans = [2, 2, 3].



Example 2:

Input: nums = [2,3,1]
Output: [3,3,3]
Explanation:

For i = 0: Jump forward to j = 2 as nums[j] = 1 is less than nums[i] = 2, then from i = 2 jump to j = 1 as nums[j] = 3 is greater than nums[2].
For i = 1: Since nums[1] = 3 is the maximum value in nums, no jump increases the value.
For i = 2: Jump to j = 1 as nums[j] = 3 is greater than nums[2] = 1.

Thus, ans = [3, 3, 3].


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109​​​​​​​


```

## 翻译

从index i可跳到j>i(需nums[j]<nums[i])或j<i(需nums[j]>nums[i])。对每个i，求可达最大值。

## 解题思路

线段树+前缀最大值。从右往左遍历，用线段树按值域维护maxReach。对每个i，查询所有值<prefMax[i]的maxReach，ans[i]=max(prefMax[i], maxRight)，再更新nums[i]位置的线段树。

## Solution

[SourceCode](./solution.js)
