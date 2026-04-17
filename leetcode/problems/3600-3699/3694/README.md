# [3694] Distinct Points Reachable After Substring Removal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distinct-points-reachable-after-substring-removal/description/)

* algorithms
* Medium (53.88%)
* Likes:    66
* Dislikes: 1
* Testcase Example:  '"LUL"\n1'

```md
You are given a string s consisting of characters &#39;U&#39;, &#39;D&#39;, &#39;L&#39;, and &#39;R&#39;, representing moves on an infinite 2D Cartesian grid.

&#39;U&#39;: Move from (x, y) to (x, y + 1).
&#39;D&#39;: Move from (x, y) to (x, y - 1).
&#39;L&#39;: Move from (x, y) to (x - 1, y).
&#39;R&#39;: Move from (x, y) to (x + 1, y).

You are also given a positive integer k.
You must choose and remove exactly one contiguous substring of length k from s. Then, start from coordinate (0, 0) and perform the remaining moves in order.
Return an integer denoting the number of distinct final coordinates reachable.

Example 1:

Input: s = 'LUL', k = 1
Output: 2
Explanation:
After removing a substring of length 1, s can be 'UL', 'LL' or 'LU'. Following these moves, the final coordinates will be (-1, 1), (-2, 0) and (-1, 1) respectively. There are two distinct points (-1, 1) and (-2, 0) so the answer is 2.

Example 2:

Input: s = 'UDLR', k = 4
Output: 1
Explanation:
After removing a substring of length 4, s can only be the empty string. The final coordinates will be (0, 0). There is only one distinct point (0, 0) so the answer is 1.

Example 3:

Input: s = 'UU', k = 1
Output: 1
Explanation:
After removing a substring of length 1, s becomes 'U', which always ends at (0, 1), so there is only one distinct final coordinate.


Constraints:

1 <= s.length <= 105
s consists of only &#39;U&#39;, &#39;D&#39;, &#39;L&#39;, and &#39;R&#39;.
1 <= k <= s.length


```

## 题目翻译

给定由 U/D/L/R 组成的字符串 s 和正整数 k。从 (0,0) 出发，先删除 s 中一个长度为 k 的连续子串，再按顺序执行剩余移动。求能到达的不同终点坐标数。

## 解题思路

**前缀+后缀位置**

删除 s[i..i+k-1] 后的终点 = prefix[i] + suffix[i+k]，其中 prefix[i] 是执行前 i 步后的位置，suffix[j] 是执行第 j 步到末尾后的位置。

用 Set 存储 prefix[i] + suffix[i+k] 的所有值（i = 0..n-k），返回 Set 大小。

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
