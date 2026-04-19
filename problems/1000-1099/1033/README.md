# [1033] Moving Stones Until Consecutive

## Description

[LeetCode Problem Description](https://leetcode.com/problems/moving-stones-until-consecutive/description/)

* algorithms
* Medium (52.24%)
* Likes:    258
* Dislikes: 658
* Testcase Example:  '1\n2\n5'

```md
There are three stones in different positions on the X-axis. You are given three integers a, b, and c, the positions of the stones.
In one move, you pick up a stone at an endpoint (i.e., either the lowest or highest position stone), and move it to an unoccupied position between those endpoints. Formally, let&#39;s say the stones are currently at positions x, y, and z with x < y < z. You pick up the stone at either position x or position z, and move that stone to an integer position k, with x < k < z and k != y.
The game ends when you cannot make any more moves (i.e., the stones are in three consecutive positions).
Return an integer array answer of length 2 where:

answer[0] is the minimum number of moves you can play, and
answer[1] is the maximum number of moves you can play.


Example 1:

Input: a = 1, b = 2, c = 5
Output: [1,2]
Explanation: Move the stone from 5 to 3, or move the stone from 5 to 4 to 3.

Example 2:

Input: a = 4, b = 3, c = 2
Output: [0,0]
Explanation: We cannot make any moves.

Example 3:

Input: a = 3, b = 5, c = 1
Output: [1,2]
Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.


Constraints:

1 <= a, b, c <= 100
a, b, and c have different values.


```

## 中文翻译

三个石头在不同 X 轴位置，每次移动端点石头到中间空位，直到三石连续。求最少和最多步数。

## 解题思路

**分类讨论**

排序 x < y < z，设 gap1 = y-x-1, gap2 = z-y-1。

- 最小步数：
  - gap1=0 且 gap2=0 → 0（已连续）
  - gap1<=1 或 gap2<=1 → 1（一步到位）
  - 否则 → 2
- 最大步数：gap1 + gap2（每次只移一格）

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
