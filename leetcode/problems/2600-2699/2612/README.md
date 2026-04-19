# [2612] Minimum Reverse Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-reverse-operations/description/)

* algorithms
* Hard (16.88%)
* Likes:    257
* Dislikes: 74
* Testcase Example:  '4\n0\n[1,2]\n4'

```md
You are given an integer n and an integer p representing an array arr of length n where all elements are set to 0&#39;s, except position p which is set to 1. You are also given an integer array banned containing restricted positions. Perform the following operation on arr:

Reverse a subarray with size k if the single 1 is not set to a position in banned.

Return an integer array answer with n results where the ith result is the minimum number of operations needed to bring the single 1 to position i in arr, or -1 if it is impossible.

Example 1:

Input: n = 4, p = 0, banned = [1,2], k = 4
Output: [0,-1,-1,1]
Explanation:

Initially 1 is placed at position 0 so the number of operations we need for position 0 is 0.
We can never place 1 on the banned positions, so the answer for positions 1 and 2 is -1.
Perform the operation of size 4 to reverse the whole array.
After a single operation 1 is at position 3 so the answer for position 3 is 1.


Example 2:

Input: n = 5, p = 0, banned = [2,4], k = 3
Output: [0,-1,-1,-1,-1]
Explanation:

Initially 1 is placed at position 0 so the number of operations we need for position 0 is 0.
We cannot perform the operation on the subarray positions [0, 2] because position 2 is in banned.
Because 1 cannot be set at position 2, it is impossible to set 1 at other positions in more operations.


Example 3:

Input: n = 4, p = 2, banned = [0,1,3], k = 1
Output: [-1,-1,0,-1]
Explanation:
Perform operations of size 1 and 1 never changes its position.


Constraints:

1 <= n <= 105
0 <= p <= n - 1
0 <= banned.length <= n - 1
0 <= banned[i] <= n - 1
1 <= k <= n
banned[i] != p
all values in bannedare unique


```

## 翻译

给定长度 n 的数组（全 0，位置 p 为 1），禁止位置数组 banned，和子数组大小 k。操作：反转长度为 k 的子数组，前提是反转后 1 不落在 banned 位置。求将 1 移到每个位置的最少操作次数。

## 解题思路

BFS + 并查集优化。反转子数组 [L, L+k-1] 时，位置 pos 的 1 移到 2L+k-1-pos。从 pos 出发，L 范围 [max(0,pos-k+1), min(pos,n-k)]，因此可达位置形成等差数列（步长 2，固定奇偶性）。

用两个并查集（按奇偶分组）维护未访问且未禁止的位置，支持 O(α(n)) 查询和删除区间内所有可用位置。总复杂度 O(n α(n))。

## Solution

[SourceCode](./solution.js)
