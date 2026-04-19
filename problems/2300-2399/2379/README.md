# [2379] Minimum Recolors to Get K Consecutive Black Blocks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/)

* algorithms
* Easy (68.62%)
* Likes:    1321
* Dislikes: 38
* Testcase Example:  '"WBBWWBBWBW"\n7'

```md
You are given a 0-indexed string blocks of length n, where blocks[i] is either &#39;W&#39; or &#39;B&#39;, representing the color of the ith block. The characters &#39;W&#39; and &#39;B&#39; denote the colors white and black, respectively.
You are also given an integer k, which is the desired number of consecutive black blocks.
In one operation, you can recolor a white block such that it becomes a black block.
Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

Example 1:

Input: blocks = 'WBBWWBBWBW', k = 7
Output: 3
Explanation:
One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
so that blocks = 'BBBBBBBWBW'.
It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
Therefore, we return 3.

Example 2:

Input: blocks = 'WBWBBBW', k = 2
Output: 0
Explanation:
No changes need to be made, since 2 consecutive black blocks already exist.
Therefore, we return 0.


Constraints:

n == blocks.length
1 <= n <= 100
blocks[i] is either &#39;W&#39; or &#39;B&#39;.
1 <= k <= n


```

## 中文翻译

给定字符串 blocks（含 'W' 和 'B'），求最少将多少个 'W' 变成 'B'，使存在至少 k 个连续 'B'。

## 解题思路

滑动窗口，维护长度为 k 的窗口中 'W' 的个数，取最小值。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
