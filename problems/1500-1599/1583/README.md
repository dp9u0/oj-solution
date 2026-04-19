# [1583] Count Unhappy Friends

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-unhappy-friends/description/)

* algorithms
* Medium (62.48%)
* Likes:    309
* Dislikes: 887
* Testcase Example:  '4\n[[1,2,3],[3,2,0],[3,1,0],[1,2,0]]\n[[0,1],[2,3]]'

```md
You are given a list ofpreferencesfornfriends, where n is always even.
For each person i,preferences[i]containsa list of friendssorted in the order of preference. In other words, a friend earlier in the list is more preferred than a friend later in the list.Friends ineach list aredenoted by integers from 0 to n-1.
All the friends are divided into pairs.The pairings aregiven in a listpairs,where pairs[i] = [xi, yi] denotes xiis paired with yi and yi is paired with xi.
However, this pairing may cause some of the friends to be unhappy.A friend xis unhappy if xis paired with yand there exists a friend uwhois paired with vbut:

xprefers uover y,and
uprefers xover v.

Return the number of unhappy friends.

Example 1:

Input: n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
Output: 2
Explanation:
Friend 1 is unhappy because:
- 1 is paired with 0 but prefers 3 over 0, and
- 3 prefers 1 over 2.
Friend 3 is unhappy because:
- 3 is paired with 2 but prefers 1 over 2, and
- 1 prefers 3 over 0.
Friends 0 and 2 are happy.

Example 2:

Input: n = 2, preferences = [[1], [0]], pairs = [[1, 0]]
Output: 0
Explanation: Both friends 0 and 1 are happy.

Example 3:

Input: n = 4, preferences = [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], pairs = [[1, 3], [0, 2]]
Output: 4


Constraints:

2 <= n <= 500
nis even.
preferences.length== n
preferences[i].length== n - 1
0 <= preferences[i][j] <= n - 1
preferences[i]does not contain i.
All values inpreferences[i]are unique.
pairs.length== n/2
pairs[i].length== 2
xi != yi
0 <= xi, yi<= n - 1
Each person is contained in exactly one pair.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n 个人的偏好列表和配对关系。x 不开心当且仅当 x 配对 y，但存在 u 配对 v，使得 x 更喜欢 u 而非 y，且 u 更喜欢 x 而非 v。返回不开心的人数。

## 解题思路

预处理每个人对其他人的偏好排名 rank[i][j]。对每个人 x，遍历所有比其配对对象 y 更受 x 偏好的 u，检查 u 是否也更喜欢 x 而非 u 的配对对象 v。O(n²)。
