# [3917] Count Indices With Opposite Parity

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-indices-with-opposite-parity/description/)

* algorithms
* Easy (81.96%)
* Likes:    29
* Dislikes: 2
* Testcase Example:  '[1,2,3,4]'

```md
You are given an integer array nums of length n.
The score of an index i is defined as the number of indices j such that:

i < j < n, and
nums[i] and nums[j] have different parity (one is even and the other is odd).

Return an integer array answer of length n, where answer[i] is the score of index i.

Example 1:

Input: nums = [1,2,3,4]
Output: [2,1,1,0]
Explanation:

nums[0] = 1, which is odd. Thus, the indices j = 1 and j = 3 satisfy the conditions, so the score of index 0 is 2.
nums[1] = 2, which is even. Thus, the index j = 2 satisfies the conditions, so the score of index 1 is 1.
nums[2] = 3, which is odd. Thus, the index j = 3 satisfies the conditions, so the score of index 2 is 1.
nums[3] = 4, which is even. Thus, no index satisfies the conditions, so the score of index 3 is 0.

Thus, the answer = [2, 1, 1, 0].

Example 2:

Input: nums = [1]
Output: [0]
Explanation:
There is only one element in nums. Thus, the score of index 0 is 0.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

索引 i 的"分数" = 满足 `i < j < n` 且 `nums[i]`、`nums[j]` 奇偶性不同的 j 的个数。返回每个索引的分数数组。

示例：`[1,2,3,4]` → `[2,1,1,0]`；`[1]` → `[0]`

约束：`n <= 100`

## 解题思路

先统计全数组偶数/奇数总数作为后缀计数，从左到右扫描：先把当前元素移出后缀，答案 = 相反奇偶的后缀个数。O(n) 单遍。
