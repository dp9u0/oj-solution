# [1643] Kth Smallest Instructions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-smallest-instructions/description/)

* algorithms
* Hard (44.73%)
* Likes:    568
* Dislikes: 16
* Testcase Example:  '[2,3]\n1'

```md
Bob is standing at cell (0, 0), and he wants to reach destination: (row, column). He can only travel right and down. You are going to help Bob by providing instructions for him to reach destination.
The instructions are represented as a string, where each character is either:

&#39;H&#39;, meaning move horizontally (go right), or
&#39;V&#39;, meaning move vertically (go down).

Multiple instructions will lead Bob to destination. For example, if destination is (2, 3), both 'HHHVV' and 'HVHVH' are valid instructions.
However, Bob is very picky. Bob has a lucky number k, and he wants the kth lexicographically smallest instructions that will lead him to destination. k is 1-indexed.
Given an integer array destination and an integer k, return the kth lexicographically smallest instructions that will take Bob to destination.

Example 1:


Input: destination = [2,3], k = 1
Output: 'HHHVV'
Explanation: All the instructions that reach (2, 3) in lexicographic order are as follows:
['HHHVV', 'HHVHV', 'HHVVH', 'HVHHV', 'HVHVH', 'HVVHH', 'VHHHV', 'VHHVH', 'VHVHH', 'VVHHH'].

Example 2:


Input: destination = [2,3], k = 2
Output: 'HHVHV'

Example 3:


Input: destination = [2,3], k = 3
Output: 'HHVVH'


Constraints:

destination.length == 2
1 <= row, column <= 15
1 <= k <= nCr(row + column, row), where nCr(a, b) denotes a choose b​​​​​.


```

## 中文翻译

Bob 从 (0,0) 到 (row, column)，只能向右(H)或向下(V)。所有有效指令按字典序排列，返回第 k 小的指令。

## 解题思路

**组合数学 + 贪心构造**：

1. 总共需要 column 个 H 和 row 个 V，共 row+column 步
2. 逐位决定：当前位置放 H 时，剩余 column-1 个 H 和 row 个 V，排列数 C(row+col-1, row)
3. 如果 k ≤ C(row+col-1, row)，当前位置放 H；否则放 V，k 减去该组合数
4. 预计算组合数表

时间复杂度：O((row+column)²)

## Solution

[SourceCode](./solution.js)
