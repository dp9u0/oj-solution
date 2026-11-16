# [3173] 相邻元素的按位或

## Description


```md
https://leetcode.cn/problems/bitwise-or-of-adjacent-elements/description/
* algorithms
* Easy (39.55%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[1,3,7,15]'
给定一个长度为 n 的数组 nums，返回一个长度为 n - 1 的数组 answer 使得 answer[i] = nums[i]
nums[i + 1]，其中
表示按位 OR 操作。

示例 1：
输入：nums = [1,3,7,15]
输出：[3,7,15]

示例 2：
输入：nums = [8,4,2]
输出：[12,6]

示例 3：
输入：nums = [5,4,9,11]
输出：[5,13,11]

提示：
2 <= nums.length <= 100
0 <= nums[i] <= 100
Hint 1: Iterate over array and calculate each element of the resulting array using
operation.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array `nums` of length `n`, return an array `answer` of length `n - 1` such that `answer[i] = nums[i] | nums[i + 1]`, where `|` is the bitwise OR operation.

**Constraints:**
- 2 <= nums.length <= 100
- 0 <= nums[i] <= 100

## Approach

一遍遍历,相邻元素按位或。

时间 O(n),空间 O(n)(输出)。
