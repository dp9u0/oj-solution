# [3154] Find Number of Ways to Reach the K-th Stair

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/description/)

* algorithms
* Hard (37.56%)
* Likes:    199
* Dislikes: 13
* Testcase Example:  '0'

```md
You are given a non-negative integer k. There exists a staircase with an infinite number of stairs, with the lowest stair numbered 0.
Alice has an integer jump, with an initial value of 0. She starts on stair 1 and wants to reach stair k using any number of operations. If she is on stair i, in one operation she can:

Go down to stair i - 1. This operation cannot be used consecutively or on stair 0.
Go up to stair i + 2jump. And then, jump becomes jump + 1.

Return the total number of ways Alice can reach stair k.
Note that it is possible that Alice reaches the stair k, and performs some operations to reach the stair k again.

Example 1:

Input: k = 0
Output: 2
Explanation:
The 2 possible ways of reaching stair 0 are:

Alice starts at stair 1.

Using an operation of the first type, she goes down 1 stair to reach stair 0.


Alice starts at stair 1.

Using an operation of the first type, she goes down 1 stair to reach stair 0.
Using an operation of the second type, she goes up 20 stairs to reach stair 1.
Using an operation of the first type, she goes down 1 stair to reach stair 0.




Example 2:

Input: k = 1
Output: 4
Explanation:
The 4 possible ways of reaching stair 1 are:

Alice starts at stair 1. Alice is at stair 1.
Alice starts at stair 1.

Using an operation of the first type, she goes down 1 stair to reach stair 0.
Using an operation of the second type, she goes up 20 stairs to reach stair 1.


Alice starts at stair 1.

Using an operation of the second type, she goes up 20 stairs to reach stair 2.
Using an operation of the first type, she goes down 1 stair to reach stair 1.


Alice starts at stair 1.

Using an operation of the first type, she goes down 1 stair to reach stair 0.
Using an operation of the second type, she goes up 20 stairs to reach stair 1.
Using an operation of the first type, she goes down 1 stair to reach stair 0.
Using an operation of the second type, she goes up 21 stairs to reach stair 2.
Using an operation of the first type, she goes down 1 stair to reach stair 1.





Constraints:

0 <= k <= 109


```

## 翻译

Alice 从楼梯 1 出发，jump=0。两种操作：下 1 级（不能连续使用，不能在 0 级用）；上 2^jump 级，然后 jump++。求到达第 k 级的方案数。

## 解题思路

若使用 j 次上跳操作，总上升量 = 2^j - 1，设下跳 d 次，最终位置 = 1 + (2^j - 1) - d = 2^j - d = k，故 d = 2^j - k。因不能连续下跳，j 次上跳将序列分成 j+1 个间隙，每个间隙最多 1 次下跳，故 d <= j+1。方案数 = C(j+1, d)。遍历 j = 0..30 求和。

## Solution

[SourceCode](./solution.js)
