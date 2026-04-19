# [1560] Most Visited Sector in  a Circular Track

## Description

[LeetCode Problem Description](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/description/)

* algorithms
* Easy (59.84%)
* Likes:    340
* Dislikes: 677
* Testcase Example:  '4\n[1,3,1,2]'

```md
Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]
Return an array of the most visited sectors sorted in ascending order.
Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).

Example 1:


Input: n = 4, rounds = [1,3,1,2]
Output: [1,2]
Explanation: The marathon starts at sector 1. The order of the visited sectors is as follows:
1 --> 2 --> 3 (end of round 1) --> 4 --> 1 (end of round 2) --> 2 (end of round 3 and the marathon)
We can see that both sectors 1 and 2 are visited twice and they are the most visited sectors. Sectors 3 and 4 are visited only once.
Example 2:

Input: n = 2, rounds = [2,1,2,1,2,1,2,1,2]
Output: [2]

Example 3:

Input: n = 7, rounds = [1,3,5,7]
Output: [1,2,3,4,5,6,7]


Constraints:

2 <= n <= 100
1 <= m <= 100
rounds.length == m + 1
1 <= rounds[i] <= n
rounds[i] != rounds[i + 1] for 0 <= i < m


```

## 翻译

给定环形赛道 n 个扇区和马拉松轮次数组 rounds。第 i 轮从 rounds[i-1] 跑到 rounds[i]。返回被访问最多的扇区（升序排列）。

## 解题思路

计数起始扇区，然后对每轮只计数从起始到结束过程中经过的新扇区（不含起始扇区本身，因为上一轮已计数）。最后找最大计数的扇区。时间复杂度 O(n*m)。

## Solution

[SourceCode](./solution.js)
