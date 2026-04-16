# [2564] Substring XOR Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/substring-xor-queries/description/)

* algorithms
* Medium (35.56%)
* Likes:    404
* Dislikes: 85
* Testcase Example:  '"101101"\n[[0,5],[1,2]]'

```md
You are given a binary string s, and a 2D integer array queries where queries[i] = [firsti, secondi].
For the ith query, find the shortest substring of s whose decimal value, val, yields secondi when bitwise XORed with firsti. In other words, val ^ firsti == secondi.
The answer to the ith query is the endpoints (0-indexed) of the substring [lefti, righti] or [-1, -1] if no such substring exists. If there are multiple answers, choose the one with the minimum lefti.
Return an array ans where ans[i] = [lefti, righti] is the answer to the ith query.
A substring is a contiguous non-empty sequence of characters within a string.

Example 1:

Input: s = '101101', queries = [[0,5],[1,2]]
Output: [[0,2],[2,3]]
Explanation: For the first query the substring in range [0,2] is '101' which has a decimal value of 5, and 5 ^ 0 = 5, hence the answer to the first query is [0,2]. In the second query, the substring in range [2,3] is '11', and has a decimal value of 3, and 3 ^ 1 = 2.So, [2,3] is returned for the second query.

Example 2:

Input: s = '0101', queries = [[12,8]]
Output: [[-1,-1]]
Explanation: In this example there is no substring that answers the query, hence [-1,-1] is returned.

Example 3:

Input: s = '1', queries = [[4,5]]
Output: [[0,0]]
Explanation: For this example, the substring in range [0,0] has a decimal value of 1, and 1 ^ 4 = 5. So, the answer is [0,0].


Constraints:

1 <= s.length <= 104
s[i] is either &#39;0&#39; or &#39;1&#39;.
1 <= queries.length <= 105
0 <= firsti, secondi <= 109


```

## 中文翻译

给定二进制字符串 s 和查询数组 queries，每个查询 [first, second] 要找最短子串使其十进制值 val 满足 val XOR first == second（即 val = first ^ second）。返回每个查询的子串左右端点，不存在则 [-1,-1]。多个答案取最左。

## 解题思路

预处理：val = first ^ second，只需在 s 中找值为 val 的最短子串。从每个 '1' 位置向右扩展，计算二进制值（最多 30 位，因值 ≤ 2^30）。用 Map 记录每个值首次出现的位置（即最短且最左）。值 0 单独处理（找第一个 '0'）。

## Solution

[SourceCode](./solution.js)
