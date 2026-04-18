# [2983] Palindrome Rearrangement Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/palindrome-rearrangement-queries/description/)

* algorithms
* Hard (24.92%)
* Likes:    98
* Dislikes: 27
* Testcase Example:  '"abcabc"\n[[1,1,3,5],[0,2,5,5]]'

```md
You are given a 0-indexed string s having an even length n.
You are also given a 0-indexed 2D integer array, queries, where queries[i] = [ai, bi, ci, di].
For each query i, you are allowed to perform the following operations:

Rearrange the characters within the substring s[ai:bi], where 0 <= ai <= bi < n / 2.
Rearrange the characters within the substring s[ci:di], where n / 2 <= ci <= di < n.

For each query, your task is to determine whether it is possible to make s a palindrome by performing the operations.
Each query is answered independently of the others.
Return a 0-indexed array answer, where answer[i] == true if it is possible to make s a palindrome by performing operations specified by the ith query, and false otherwise.

A substring is a contiguous sequence of characters within a string.
s[x:y] represents the substring consisting of characters from the index x to index y in s, both inclusive.


Example 1:

Input: s = 'abcabc', queries = [[1,1,3,5],[0,2,5,5]]
Output: [true,true]
Explanation: In this example, there are two queries:
In the first query:
- a0 = 1, b0 = 1, c0 = 3, d0 = 5.
- So, you are allowed to rearrange s[1:1] => abcabc and s[3:5] => abcabc.
- To make s a palindrome, s[3:5] can be rearranged to become => abccba.
- Now, s is a palindrome. So, answer[0] = true.
In the second query:
- a1 = 0, b1 = 2, c1 = 5, d1 = 5.
- So, you are allowed to rearrange s[0:2] => abcabc and s[5:5] => abcabc.
- To make s a palindrome, s[0:2] can be rearranged to become => cbaabc.
- Now, s is a palindrome. So, answer[1] = true.

Example 2:

Input: s = 'abbcdecbba', queries = [[0,2,7,9]]
Output: [false]
Explanation: In this example, there is only one query.
a0 = 0, b0 = 2, c0 = 7, d0 = 9.
So, you are allowed to rearrange s[0:2] => abbcdecbba and s[7:9] => abbcdecbba.
It is not possible to make s a palindrome by rearranging these substrings because s[3:6] is not a palindrome.
So, answer[0] = false.
Example 3:

Input: s = 'acbcab', queries = [[1,2,4,5]]
Output: [true]
Explanation: In this example, there is only one query.
a0 = 1, b0 = 2, c0 = 4, d0 = 5.
So, you are allowed to rearrange s[1:2] => acbcab and s[4:5] => acbcab.
To make s a palindrome s[1:2] can be rearranged to become abccab.
Then, s[4:5] can be rearranged to become abccba.
Now, s is a palindrome. So, answer[0] = true.

Constraints:

2 <= n == s.length <= 105
1 <= queries.length <= 105
queries[i].length == 4
ai == queries[i][0], bi == queries[i][1]
ci == queries[i][2], di == queries[i][3]
0 <= ai <= bi < n / 2
n / 2 <= ci <= di < n
n is even.
s consists of only lowercase English letters.


```

## 中文翻译

给定一个长度为偶数 n 的字符串 s（下标从 0 开始），以及一个二维整数数组 queries，其中 queries[i] = [ai, bi, ci, di]。

对于每个查询，你可以：
1. 重新排列子串 s[ai:bi] 中的字符（前半部分，0 ≤ ai ≤ bi < n/2）
2. 重新排列子串 s[ci:di] 中的字符（后半部分，n/2 ≤ ci ≤ di < n）

判断每次操作后是否能使 s 成为回文串。每个查询独立判断。

## 解题思路

**核心思路：前缀和 + 字符频率分析**

将字符串分为前半部分 [0, n/2-1] 和后半部分 [n/2, n-1]。对于前半部分的位置 i，其对称位置为 n-1-i。

定义 R1 = [a, b]（可直接重排的前半区间），R2 = [n-1-d, n-1-c]（后半可重排区间在前半的镜像）。

每对位置 (i, n-1-i) 分为四种情况：
1. **Case 1**: i ∈ R1 ∩ R2 — 两端都可重排，池中剩余字符必须完全匹配
2. **Case 2**: i ∈ R1 \ R2 — 前半可重排，需从 Pool A 提供字符匹配固定的后半字符
3. **Case 3**: i ∈ R2 \ R1 — 后半可重排，需从 Pool B 提供字符匹配固定的前半字符
4. **Case 4**: i ∉ R1 ∪ R2 — 两端固定，必须已经匹配

使用前缀和数组快速计算任意区间的字符频率和不匹配数，每个查询 O(26) 处理。

## Solution

[SourceCode](./solution.js)
