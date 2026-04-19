# [2591] Distribute Money to Maximum Children

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distribute-money-to-maximum-children/description/)

* algorithms
* Easy (20.53%)
* Likes:    366
* Dislikes: 926
* Testcase Example:  '20\n3'

```md
You are given an integer money denoting the amount of money (in dollars) that you have and another integer children denoting the number of children that you must distribute the money to.
You have to distribute the money according to the following rules:

All money must be distributed.
Everyone must receive at least 1 dollar.
Nobody receives 4 dollars.

Return the maximum number of children who may receive exactly 8 dollars if you distribute the money according to the aforementioned rules. If there is no way to distribute the money, return -1.

Example 1:

Input: money = 20, children = 3
Output: 1
Explanation:
The maximum number of children with 8 dollars will be 1. One of the ways to distribute the money is:
- 8 dollars to the first child.
- 9 dollars to the second child.
- 3 dollars to the third child.
It can be proven that no distribution exists such that number of children getting 8 dollars is greater than 1.

Example 2:

Input: money = 16, children = 2
Output: 2
Explanation: Each child can be given 8 dollars.


Constraints:

1 <= money <= 200
2 <= children <= 30


```

## 中文翻译

给定 money 美元和 children 个孩子，分配所有钱：每人至少 1 美元，没人拿 4 美元。求最多多少个孩子恰好拿到 8 美元。无法分配返回 -1。

## 解题思路

贪心：尽可能给 8 美元。先算最多能分几个 8，即 cnt = min(money/8, children)。剩余钱和剩余孩子分配时需避免 4 美元的情况，逐一调整。

## Solution

[SourceCode](./solution.js)
