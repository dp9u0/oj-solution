# [1733] Minimum Number of People to Teach

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-people-to-teach/description/)

* algorithms
* Medium (67.59%)
* Likes:    716
* Dislikes: 560
* Testcase Example:  '2\n[[1],[2],[1,2]]\n[[1,2],[1,3],[2,3]]'

```md
On a social network consisting of m users and some friendships between users, two users can communicate with each other if they know a common language.
You are given an integer n, an array languages, and an array friendships where:

There are n languages numbered 1 through n,
languages[i] is the set of languages the i​​​​​​th​​​​ user knows, and
friendships[i] = [u​​​​​​i​​​, v​​​​​​i] denotes a friendship between the users u​​​​​​​​​​​i​​​​​ and vi.

You can choose one language and teach it to some users so that all friends can communicate with each other. Return the minimum number of users you need to teach.
Note that friendships are not transitive, meaning if x is a friend of y and y is a friend of z, this doesn&#39;t guarantee that x is a friend of z.

Example 1:

Input: n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]
Output: 1
Explanation: You can either teach user 1 the second language or user 2 the first language.

Example 2:

Input: n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]
Output: 2
Explanation: Teach the third language to users 1 and 3, yielding two users to teach.


Constraints:

2 <= n <= 500
languages.length == m
1 <= m <= 500
1 <= languages[i].length <= n
1 <= languages[i][j] <= n
1 <= u​​​​​​i < v​​​​​​i <= languages.length
1 <= friendships.length <= 500
All tuples (u​​​​​i, v​​​​​​i) are unique
languages[i] contains only unique values


```

## 中文翻译

社交网络中，朋友之间需要共同语言才能交流。选择一种语言教给一些用户，使所有朋友都能交流。返回最少需要教多少用户。

## 解题思路

**枚举语言**：

1. 先找出不能交流的朋友对（没有共同语言）
2. 对每种语言，统计不能交流的朋友对中有多少用户还不会该语言
3. 取最小值

时间复杂度：O(n * (m + f))

## Solution

[SourceCode](./solution.js)
