# [649] Dota2 Senate

## Description

[LeetCode Problem Description](https://leetcode.com/problems/dota2-senate/description/)

* algorithms
* Medium (49.73%)
* Likes:    2786
* Dislikes: 2086
* Testcase Example:  '"RD"'

```md
In the world of Dota2, there are two parties: the Radiant and the Dire.
The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

Ban one senator&#39;s right: A senator can make another senator lose all his rights in this and all the following rounds.
Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.

Given a string senate representing each senator&#39;s party belonging. The character &#39;R&#39; and &#39;D&#39; represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.
The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.
Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be 'Radiant' or 'Dire'.

Example 1:

Input: senate = 'RD'
Output: 'Radiant'
Explanation:
The first senator comes from Radiant and he can just ban the next senator&#39;s right in round 1.
And the second senator can&#39;t exercise any rights anymore since his right has been banned.
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

Example 2:

Input: senate = 'RDD'
Output: 'Dire'
Explanation:
The first senator comes from Radiant and he can just ban the next senator&#39;s right in round 1.
And the second senator can&#39;t exercise any rights anymore since his right has been banned.
And the third senator comes from Dire and he can ban the first senator&#39;s right in round 1.
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.


Constraints:

n == senate.length
1 <= n <= 104
senate[i] is either &#39;R&#39; or &#39;D&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 senate，'R' 代表 Radiant 阵营，'D' 代表 Dire 阵营。每轮每个议员可以禁言对方阵营的一个议员。若剩余议员全属同一阵营则宣布胜利。预测哪个阵营最终获胜。

## 解题思路

**队列模拟 / 贪心**

用两个队列分别存储 R 和 D 议员的下标。每轮比较两个队首，下标小的先行动，禁言对方阵营的下一个议员，然后将自己下标加 n（表示下一轮排在后面）。被禁言的议员直接出队不回归。

当某个队列为空时，另一个阵营获胜。

时间复杂度 O(n)，空间复杂度 O(n)。
