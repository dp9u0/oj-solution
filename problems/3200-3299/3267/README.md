# [3267] Count Almost Equal Pairs II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-almost-equal-pairs-ii/description/)

* algorithms
* Hard (27.15%)
* Likes:    81
* Dislikes: 24
* Testcase Example:  '[1023,2310,2130,213]'

```md
Attention: In this version, the number of operations that can be performed, has been increased to twice.
You are given an array nums consisting of positive integers.
We call two integers x and y almost equal if both integers can become equal after performing the following operation at most twice:

Choose either x or y and swap any two digits within the chosen number.

Return the number of indices i and j in nums where i < j such that nums[i] and nums[j] are almost equal.
Note that it is allowed for an integer to have leading zeros after performing an operation.

Example 1:

Input: nums = [1023,2310,2130,213]
Output: 4
Explanation:
The almost equal pairs of elements are:

1023 and 2310. By swapping the digits 1 and 2, and then the digits 0 and 3 in 1023, you get 2310.
1023 and 213. By swapping the digits 1 and 0, and then the digits 1 and 2 in 1023, you get 0213, which is 213.
2310 and 213. By swapping the digits 2 and 0, and then the digits 3 and 2 in 2310, you get 0213, which is 213.
2310 and 2130. By swapping the digits 3 and 1 in 2310, you get 2130.


Example 2:

Input: nums = [1,10,100]
Output: 3
Explanation:
The almost equal pairs of elements are:

1 and 10. By swapping the digits 1 and 0 in 10, you get 01 which is 1.
1 and 100. By swapping the second 0 with the digit 1 in 100, you get 001, which is 1.
10 and 100. By swapping the first 0 with the digit 1 in 100, you get 010, which is 10.



Constraints:

2 <= nums.length <= 5000
1 <= nums[i] < 107


```

## 中文翻译

给定正整数数组 nums。两个数 x 和 y "几乎相等"定义为：对 x 或 y 执行至多 2 次交换数字操作后可以相等。求满足 i < j 且 nums[i] 与 nums[j] 几乎相等的 (i, j) 对数。

## 解题思路

对每个数，生成通过 0~2 次数字交换可达的所有数值集合 reachable(x)。两个数几乎相等 ⟺ reachable(x) ∩ reachable(y) ≠ ∅。

用增量式桶计数：
1. 从左到右遍历，维护 val → [indices] 的映射（只含已处理的索引）。
2. 对每个 i，检查 reachable(nums[i]) 中所有值对应的已有索引，用 flag 数组去重，统计与 i 几乎相等的 j < i 的数量。

数字最多 7 位（nums[i] < 10^7），两次交换后可达值约 200~400 个。

## Solution

[SourceCode](./solution.js)
