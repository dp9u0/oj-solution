# [1823] Find the Winner of the Circular Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/)

* algorithms
* Medium (82.24%)
* Likes:    4111
* Dislikes: 129
* Testcase Example:  '5\n2'

```md
There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.
The rules of the game are as follows:

Start at the 1st friend.
Count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.
The last friend you counted leaves the circle and loses the game.
If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
Else, the last friend in the circle wins the game.

Given the number of friends, n, and an integer k, return the winner of the game.

Example 1:


Input: n = 5, k = 2
Output: 3
Explanation: Here are the steps of the game:
1) Start at friend 1.
2) Count 2 friends clockwise, which are friends 1 and 2.
3) Friend 2 leaves the circle. Next start is friend 3.
4) Count 2 friends clockwise, which are friends 3 and 4.
5) Friend 4 leaves the circle. Next start is friend 5.
6) Count 2 friends clockwise, which are friends 5 and 1.
7) Friend 1 leaves the circle. Next start is friend 3.
8) Count 2 friends clockwise, which are friends 3 and 5.
9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.
Example 2:

Input: n = 6, k = 5
Output: 1
Explanation: The friends leave in this order: 5, 4, 6, 2, 3. The winner is friend 1.


Constraints:

1 <= k <= n <= 500


Follow up:
Could you solve this problem in linear time with constant space?

```

## 中文翻译

n 个人围成一圈（编号 1~n），从 1 开始数 k 个，最后一个被淘汰，从下一个人继续。求最后的赢家。

## 解题思路

约瑟夫环。递推公式：f(1) = 0, f(i) = (f(i-1) + k) % i。结果为 f(n) + 1（转为 1-indexed）。O(n) 时间，O(1) 空间。

## Solution

[SourceCode](./solution.js)
