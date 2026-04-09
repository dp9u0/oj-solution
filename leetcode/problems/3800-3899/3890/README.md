# [3890] Integers With Multiple Sum of Two Cubes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/integers-with-multiple-sum-of-two-cubes/description/)

* algorithms
* Medium (56.06%)
* Likes:    41
* Dislikes: 3
* Testcase Example:  '4104'

```md
You are given an integer n.
An integer x is considered good if there exist at least two distinct pairs (a, b) such that:

a and b are positive integers.
a <= b
x = a3 + b3

Return an array containing all good integers less than or equal to n, sorted in ascending order.

Example 1:

Input: n = 4104
Output: [1729,4104]
Explanation:
Among integers less than or equal to 4104, the good integers are:

1729: 13 + 123 = 1729 and 93 + 103 = 1729.
4104: 23 + 163 = 4104 and 93 + 153 = 4104.

Thus, the answer is [1729, 4104].

Example 2:

Input: n = 578
Output: []
Explanation:
There are no good integers less than or equal to 578, so the answer is an empty array.


Constraints:

1 <= n <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数 n。如果一个整数 x 满足存在至少两个不同的正整数对 (a, b)（其中 a ≤ b）使得 x = a³ + b³，则称 x 为"好整数"。返回所有小于等于 n 的好整数，按升序排列。

**约束：** 1 <= n <= 10⁹

## 解题思路

**Approach: Hash Map 计数**

1. 遍历所有可能的 a, b 对（a 从 1 到 ∛n，b 从 a 到 ∛n），计算 a³+b³
2. 用哈希表统计每个和出现的次数
3. 筛选出现次数 ≥ 2 的值，排序输出
4. 时间复杂度 O(n^(2/3))，空间复杂度 O(n^(2/3))
