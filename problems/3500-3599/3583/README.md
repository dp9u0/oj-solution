# [3583] Count Special Triplets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-special-triplets/description/)

* algorithms
* Medium (47.10%)
* Likes:    554
* Dislikes: 23
* Testcase Example:  '[6,3,6]'

```md
You are given an integer array nums.
A special triplet is defined as a triplet of indices (i, j, k) such that:

0 <= i < j < k < n, where n = nums.length
nums[i] == nums[j] * 2
nums[k] == nums[j] * 2

Return the total number of special triplets in the array.
Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: nums = [6,3,6]
Output: 1
Explanation:
The only special triplet is (i, j, k) = (0, 1, 2), where:

nums[0] = 6, nums[1] = 3, nums[2] = 6
nums[0] = nums[1] * 2 = 3 * 2 = 6
nums[2] = nums[1] * 2 = 3 * 2 = 6


Example 2:

Input: nums = [0,1,0,0]
Output: 1
Explanation:
The only special triplet is (i, j, k) = (0, 2, 3), where:

nums[0] = 0, nums[2] = 0, nums[3] = 0
nums[0] = nums[2] * 2 = 0 * 2 = 0
nums[3] = nums[2] * 2 = 0 * 2 = 0


Example 3:

Input: nums = [8,4,2,8,4]
Output: 2
Explanation:
There are exactly two special triplets:

(i, j, k) = (0, 1, 3)

nums[0] = 8, nums[1] = 4, nums[3] = 8
nums[0] = nums[1] * 2 = 4 * 2 = 8
nums[3] = nums[1] * 2 = 4 * 2 = 8


(i, j, k) = (1, 2, 4)

nums[1] = 4, nums[2] = 2, nums[4] = 4
nums[1] = nums[2] * 2 = 2 * 2 = 4
nums[4] = nums[2] * 2 = 2 * 2 = 4





Constraints:

3 <= n == nums.length <= 105
0 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，统计满足 i < j < k 且 nums[i] == nums[j]*2 且 nums[k] == nums[j]*2 的三元组数量，结果对 10^9+7 取模。

## 解题思路

**Approach: 枚举中间 + 前后计数**

1. 枚举中间位置 j，目标值 target = nums[j] * 2
2. 用右侧计数表 rightCount 预统计每个值出现次数
3. 遍历时，先将当前值从 rightCount 移除，再查左侧 leftCount[target] * rightCount[target] 作为贡献
4. 将当前值加入 leftCount
5. 时间 O(n)，空间 O(n)
