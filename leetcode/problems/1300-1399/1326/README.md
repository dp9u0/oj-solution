# [1326] Minimum Number of Taps to Open to Water a Garden

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/description/)

* algorithms
* Hard (50.99%)
* Likes:    3626
* Dislikes: 197
* Testcase Example:  '5\n[3,4,1,1,0,0]'

```md
There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point n. (i.e., thelength of the garden is n).
There are n + 1 taps located at points [0, 1, ..., n] in the garden.
Given an integer n and an integer array ranges of length n + 1 where ranges[i] (0-indexed) means the i-th tap can water the area [i - ranges[i], i + ranges[i]] if it was open.
Return the minimum number of taps that should be open to water the whole garden, If the garden cannot be watered return -1.

Example 1:


Input: n = 5, ranges = [3,4,1,1,0,0]
Output: 1
Explanation: The tap at point 0 can cover the interval [-3,3]
The tap at point 1 can cover the interval [-3,5]
The tap at point 2 can cover the interval [1,3]
The tap at point 3 can cover the interval [2,4]
The tap at point 4 can cover the interval [4,4]
The tap at point 5 can cover the interval [5,5]
Opening Only the second tap will water the whole garden [0,5]

Example 2:

Input: n = 3, ranges = [0,0,0,0]
Output: -1
Explanation: Even if you activate all the four taps you cannot water the whole garden.


Constraints:

1 <= n <= 104
ranges.length == n + 1
0 <= ranges[i] <= 100


```

## 翻译

一维花园 [0,n]，n+1个水龙头，第i个覆盖 [i-ranges[i], i+ranges[i]]。求最少开几个水龙头浇灌整个花园。

## 解题思路

贪心，转化为跳跃游戏II。对每个位置 i，计算它能到达的最远右端 maxReach[i] = i + ranges[i]。然后贪心：维护当前覆盖范围的右边界 end 和下一个能到达的最远位置 farthest。O(n)。

## Solution

[SourceCode](./solution.js)
