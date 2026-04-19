# [3776] Minimum Moves to Balance Circular Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-moves-to-balance-circular-array/description/)

* algorithms
* Medium (40.20%)
* Likes:    114
* Dislikes: 8
* Testcase Example:  '[5,1,-4]'

```md
You are given a circular array balance of length n, where balance[i] is the net balance of person i.
In one move, a person can transfer exactly 1 unit of balance to either their left or right neighbor.
Return the minimum number of moves required so that every person has a non-negative balance. If it is impossible, return -1.
Note: You are guaranteed that at most 1 index has a negative balance initially.

Example 1:

Input: balance = [5,1,-4]
Output: 4
Explanation:
One optimal sequence of moves is:

Move 1 unit from i = 1 to i = 2, resulting in balance = [5, 0, -3]
Move 1 unit from i = 0 to i = 2, resulting in balance = [4, 0, -2]
Move 1 unit from i = 0 to i = 2, resulting in balance = [3, 0, -1]
Move 1 unit from i = 0 to i = 2, resulting in balance = [2, 0, 0]

Thus, the minimum number of moves required is 4.

Example 2:

Input: balance = [1,2,-5,2]
Output: 6
Explanation:
One optimal sequence of moves is:

Move 1 unit from i = 1 to i = 2, resulting in balance = [1, 1, -4, 2]
Move 1 unit from i = 1 to i = 2, resulting in balance = [1, 0, -3, 2]
Move 1 unit from i = 3 to i = 2, resulting in balance = [1, 0, -2, 1]
Move 1 unit from i = 3 to i = 2, resulting in balance = [1, 0, -1, 0]
Move 1 unit from i = 0 to i = 1, resulting in balance = [0, 1, -1, 0]
Move 1 unit from i = 1 to i = 2, resulting in balance = [0, 0, 0, 0]

Thus, the minimum number of moves required is 6.​​​

Example 3:

Input: balance = [-3,2]
Output: -1
Explanation:
​​​​​​​It is impossible to make all balances non-negative for balance = [-3, 2], so the answer is -1.


Constraints:

1 <= n == balance.length <= 105
-109 <= balance[i] <= 109
There is at most one negative value in balance initially.


```

## 题目翻译

给定一个长度为 n 的环形数组 balance，其中 balance[i] 表示第 i 个人的净余额。每一步操作，一个人可以向左或向右的邻居转移恰好 1 单位余额。返回使所有人的余额都非负所需的最少操作次数。如果不可能，返回 -1。保证初始时最多只有 1 个负值。

## 解题思路

**贪心法**：找到唯一的负值位置，计算所有正值元素到该位置的环形最短距离，按距离从小到大排序，贪心地从最近的正值元素取单位，每取 1 单位的代价就是距离。

- 时间复杂度：O(n log n)（排序）
- 空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
