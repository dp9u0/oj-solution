# [3777] Minimum Deletions to Make Alternating Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-deletions-to-make-alternating-substring/description/)

* algorithms
* Hard (44.95%)
* Likes:    52
* Dislikes: 1
* Testcase Example:  '"ABA"\n[[2,1,2],[1,1],[2,0,2]]'

```md
You are given a string s of length n consisting only of the characters &#39;A&#39; and &#39;B&#39;.
You are also given a 2D integer array queries of length q, where each queries[i] is one of the following:

[1, j]: Flip the character at index j of s i.e. &#39;A&#39; changes to &#39;B&#39; (and vice versa). This operation mutates s and affects subsequent queries.
[2, l, r]: Compute the minimum number of character deletions required to make the substring s[l..r] alternating. This operation does not modify s; the length of s remains n.

A substring is alternating if no two adjacent characters are equal. A substring of length 1 is always alternating.
Return an integer array answer, where answer[i] is the result of the ith query of type [2, l, r].

Example 1:

Input: s = 'ABA', queries = [[2,1,2],[1,1],[2,0,2]]
Output: [0,2]
Explanation:



i
queries[i]
j
l
r
s before query
s[l..r]
Result
Answer




0
[2, 1, 2]
-
1
2
'ABA'
'BA'
Already alternating
0


1
[1, 1]
1
-
-
'ABA'
-
Flip s[1] from &#39;B&#39; to &#39;A&#39;
-


2
[2, 0, 2]
-
0
2
'AAA'
'AAA'
Delete any two &#39;A&#39;s to get 'A'
2



Thus, the answer is [0, 2].

Example 2:

Input: s = 'ABB', queries = [[2,0,2],[1,2],[2,0,2]]
Output: [1,0]
Explanation:



i
queries[i]
j
l
r
s before query
s[l..r]
Result
Answer




0
[2, 0, 2]
-
0
2
'ABB'
'ABB'
Delete one &#39;B&#39; to get 'AB'
1


1
[1, 2]
2
-
-
'ABB'
-
Flip s[2] from &#39;B&#39; to &#39;A&#39;
-


2
[2, 0, 2]
-
0
2
'ABA'
'ABA'
Already alternating
0



Thus, the answer is [1, 0].

Example 3:

Input: s = 'BABA', queries = [[2,0,3],[1,1],[2,1,3]]
Output: [0,1]
Explanation:



i
queries[i]
j
l
r
s before query
s[l..r]
Result
Answer




0
[2, 0, 3]
-
0
3
'BABA'
'BABA'
Already alternating
0


1
[1, 1]
1
-
-
'BABA'
-
Flip s[1] from &#39;A&#39; to &#39;B&#39;
-


2
[2, 1, 3]
-
1
3
'BBBA'
'BBA'
Delete one &#39;B&#39; to get 'BA'
1



Thus, the answer is [0, 1].


Constraints:

1 <= n == s.length <= 105
s[i] is either &#39;A&#39; or &#39;B&#39;.
1 <= q == queries.length <= 105
queries[i].length == 2 or 3

queries[i] == [1, j] or,
queries[i] == [2, l, r]
0 <= j <= n - 1
0 <= l <= r <= n - 1




```

## 翻译

给定由 A 和 B 组成的字符串 s，以及两种查询：
1. `[1, j]`：翻转位置 j 的字符
2. `[2, l, r]`：求子串 s[l..r] 变成交替串（相邻字符不同）所需的最少删除次数

## 解题思路

**BIT（树状数组）+ 相邻差异计数**：

关键观察：最长交替子序列长度 = 1 + 相邻不同位置数。
- 定义 `diff[i] = 1` 若 `s[i] != s[i-1]`（i > 0），否则 0
- 最少删除 = (r - l) - sum(diff[l+1..r])

翻转位置 j 时，只需更新 diff[j] 和 diff[j+1]（涉及 j-1/j 和 j/j+1 的比较），用 BIT 维护区间和。

复杂度：O((n + q) log n)。

## Solution

[SourceCode](./solution.js)
