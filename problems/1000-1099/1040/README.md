# [1040] Moving Stones Until Consecutive II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/moving-stones-until-consecutive-ii/description/)

* algorithms
* Medium (58.80%)
* Likes:    406
* Dislikes: 762
* Testcase Example:  '[7,4,9]'

```md
There are some stones in different positions on the X-axis. You are given an integer array stones, the positions of the stones.
Call a stone an endpoint stone if it has the smallest or largest position. In one move, you pick up an endpoint stone and move it to an unoccupied position so that it is no longer an endpoint stone.

In particular, if the stones are at say, stones = [1,2,5], you cannot move the endpoint stone at position 5, since moving it to any position (such as 0, or 3) will still keep that stone as an endpoint stone.

The game ends when you cannot make any more moves (i.e., the stones are in three consecutive positions).
Return an integer array answer of length 2 where:

answer[0] is the minimum number of moves you can play, and
answer[1] is the maximum number of moves you can play.


Example 1:

Input: stones = [7,4,9]
Output: [1,2]
Explanation: We can move 4 -> 8 for one move to finish the game.
Or, we can move 9 -> 5, 4 -> 6 for two moves to finish the game.

Example 2:

Input: stones = [6,5,4,3,10]
Output: [2,3]
Explanation: We can move 3 -> 8 then 10 -> 7 to finish the game.
Or, we can move 3 -> 7, 4 -> 8, 5 -> 9 to finish the game.
Notice we cannot move 10 -> 2 to finish the game, because that would be an illegal move.


Constraints:

3 <= stones.length <= 104
1 <= stones[i] <= 109
All the values of stones are unique.


```

## 中文翻译

X 轴上有若干石头，每次操作选一个端点石头（最小或最大位置），移到一个非端点的空位。游戏结束时石头连续。返回 [最少操作数, 最多操作数]。

## 解题思路

排序后，最大操作数：先让端点靠近，最大操作 = max(stones[n-1]-stones[1]-(n-2), stones[n-2]-stones[0]-(n-2))（先消耗掉一端的空位，然后另一端逐个填补）。最小操作数：滑动窗口，找长度为 n 的窗口中最多包含多少已有石头，最少操作 = n - maxStonesInWindow。特殊情况：当窗口内连续 n-1 个石头但剩 1 个在远端时，需要 2 次而非 1 次（如 [1,2,3,4,10]）。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
