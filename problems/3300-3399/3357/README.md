# [3357] Minimize the Maximum Adjacent Element Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/description/)

* algorithms
* Hard (19.65%)
* Likes:    64
* Dislikes: 14
* Testcase Example:  '[1,2,-1,10,8]'

```md
You are given an array of integers nums. Some values in nums are missing and are denoted by -1.
You must choose a pair of positive integers (x, y) exactly once and replace each missing element with either x or y.
You need to minimize the maximum absolute difference between adjacent elements of nums after replacements.
Return the minimum possible difference.

Example 1:

Input: nums = [1,2,-1,10,8]
Output: 4
Explanation:
By choosing the pair as (6, 7), nums can be changed to [1, 2, 6, 10, 8].
The absolute differences between adjacent elements are:


1 - 2
== 1

2 - 6
== 4

6 - 10
== 4

10 - 8
== 2


Example 2:

Input: nums = [-1,-1,-1]
Output: 0
Explanation:
By choosing the pair as (4, 4), nums can be changed to [4, 4, 4].

Example 3:

Input: nums = [-1,10,-1,8]
Output: 1
Explanation:
By choosing the pair as (11, 9), nums can be changed to [11, 10, 9, 8].


Constraints:

2 <= nums.length <= 105
nums[i] is either -1 or in the range [1, 109].


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

数组中 -1 需替换为选定的 x 或 y（一对正整数），最小化最大相邻绝对差。

## 解题思路

**Approach: 二分答案 + 约束检查**

1. 二分 diff，检查是否存在合法的 (x, y)
2. 对每个 -1 位置，根据相邻非 -1 值 v，约束 x/y ∈ [v-diff, v+diff]
3. 收集所有约束的交集，确定 x 和 y 各自的合法范围
4. 实际上 x 和 y 可以相同，需要检查两个范围的交集是否非空
5. 更准确：对连续 -1 段，两端的非 -1 值给出上下界约束
6. 复杂度 O(n log V)
