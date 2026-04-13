# [2055] Plates Between Candles

## Description

[LeetCode Problem Description](https://leetcode.com/problems/plates-between-candles/description/)

* algorithms
* Medium (47.42%)
* Likes:    1358
* Dislikes: 73
* Testcase Example:  '"**
**
***

```md
"\n[[2,5],[5,9]]'
There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string s consisting of characters &#39;*&#39; and &#39;
&#39; only, where a &#39;*&#39; represents a plate and a &#39;
&#39; represents a candle.
You are also given a 0-indexed 2D integer array queries where queries[i] = [lefti, righti] denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the number of plates between candles that are in the substring. A plate is considered between candles if there is at least one candle to its left and at least one candle to its right in the substring.

For example, s = '
**
**
*&quot;</code>, and a query <code>[3, 8]</code> denotes the substring <code>&quot;*
**
'. The number of plates between candles in this substring is 2, as each of the two plates has at least one candle in the substring to its left and right.

Return an integer array answer where answer[i] is the answer to the ith query.

Example 1:


Input: s = '**
**
***
', queries = [[2,5],[5,9]]
Output: [2,3]
Explanation:
- queries[0] has two plates between candles.
- queries[1] has three plates between candles.

Example 2:


Input: s = '***
**
*****
**
**
*&quot;, queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
Output: [9,0,0,0,0]
Explanation:
- queries[0] has nine plates between candles.
- The other queries have zero plates between candles.


Constraints:

3 <= s.length <= 105
s consists of &#39;*&#39; and &#39;
&#39; characters.
1 <= queries.length <= 105
queries[i].length == 2
0 <= lefti <= righti < s.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定由 '*'（盘子）和 '|'（蜡烛）组成的字符串 s，以及多个查询 [left, right]。对每个查询，统计子串中被蜡烛夹住的盘子数量（盘子左侧和右侧都至少有一个蜡烛在子串内）。

## 解题思路

**前缀和 + 预处理最近蜡烛**

1. 前缀和 prefix[i] 表示前 i 个字符中盘子的数量
2. leftCandle[i] 表示位置 i 左侧（含 i）最近的蜡烛位置
3. rightCandle[i] 表示位置 i 右侧（含 i）最近的蜡烛位置
4. 对每个查询 [l, r]，找到右边界内最左蜡烛 a 和左边界内最右蜡烛 b，答案 = prefix[b+1] - prefix[a]

时间复杂度 O(n + q)，空间复杂度 O(n)。
