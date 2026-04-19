# [2836] Maximize Value of Function in a Ball Passing Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/description/)

* algorithms
* Hard (30.63%)
* Likes:    319
* Dislikes: 93
* Testcase Example:  '[2,0,1]\n4'

```md
You are given an integer array receiver of length n and an integer k. n players are playing a ball-passing game.
You choose the starting player, i. The game proceeds as follows: player i passes the ball to player receiver[i], who then passes it to receiver[receiver[i]], and so on, for k passes in total. The game&#39;s score is the sum of the indices of the players who touched the ball, including repetitions, i.e. i + receiver[i] + receiver[receiver[i]] + ... + receiver(k)[i].
Returnthe maximumpossible score.
Notes:

receiver may contain duplicates.
receiver[i] may be equal to i.


Example 1:

Input: receiver = [2,0,1], k = 4
Output: 6
Explanation:
Starting with player i = 2 the initial score is 2:



Pass
Sender Index
Receiver Index
Score


1
2
1
3


2
1
0
3


3
0
2
5


4
2
1
6




Example 2:

Input: receiver = [1,1,1,2,3], k = 3
Output: 10
Explanation:
Starting with player i = 4 the initial score is 4:



Pass
Sender Index
Receiver Index
Score


1
4
3
7


2
3
2
9


3
2
1
10





Constraints:

1 <= receiver.length == n <= 105
0 <= receiver[i] <= n - 1
1 <= k <= 1010


```

## 翻译

给定函数图receiver和传球次数k，选择起始玩家使经过的所有玩家编号之和最大。k可达10^10。

## 解题思路

二进制倍增（Binary Lifting）。预处理go[j][i]表示从i出发2^j步到达的节点，sum[j][i]表示路径上的编号之和。对每个起始点，将k分解为二进制逐段累加。O(n·log k)。

## Solution

[SourceCode](./solution.js)
