# [3261] Count Substrings That Satisfy K-Constraint II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/description/)

* algorithms
* Hard (23.46%)
* Likes:    145
* Dislikes: 12
* Testcase Example:  '"0001111"\n2\n[[0,6]]'

```md
You are given a binary string s and an integer k.
You are also given a 2D integer array queries, where queries[i] = [li, ri].
A binary string satisfies the k-constraint if either of the following conditions holds:

The number of 0&#39;s in the string is at most k.
The number of 1&#39;s in the string is at most k.

Return an integer array answer, where answer[i] is the number of substrings of s[li..ri] that satisfy the k-constraint.

Example 1:

Input: s = '0001111', k = 2, queries = [[0,6]]
Output: [26]
Explanation:
For the query [0, 6], all substrings of s[0..6] = '0001111' satisfy the k-constraint except for the substrings s[0..5] = '000111' and s[0..6] = '0001111'.

Example 2:

Input: s = '010101', k = 1, queries = [[0,5],[1,4],[2,3]]
Output: [15,9,3]
Explanation:
The substrings of s with a length greater than 3 do not satisfy the k-constraint.


Constraints:

1 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.
1 <= k <= s.length
1 <= queries.length <= 105
queries[i] == [li, ri]
0 <= li <= ri < s.length
All queries are distinct.


```

## 翻译

给定 01 串 s 和 k，子串满足 k-constraint 指 0 的个数 ≤ k 或 1 的个数 ≤ k。多组查询 [l,r]，问该范围内有多少子串满足 k-constraint。

## 解题思路

双指针预处理 rightBound[i]：以 i 为起点的最长满足 k-constraint 的右端点。rightBound 非递减。前缀和 prefix[i] = Σ(rightBound[j]-j+1)（即前 i 个位置各自完全有效的子串数）。查询 [l,r] 时二分找 split = 首个 rightBound[split]>r 的位置，答案 = prefix[split]-prefix[l] + (r-split+1)*(r-split+2)/2。O(n+q log n)。

## Solution

[SourceCode](./solution.js)
