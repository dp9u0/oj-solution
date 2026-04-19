# [2581] Count Number of Possible Root Nodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-possible-root-nodes/description/)

* algorithms
* Hard (48.12%)
* Likes:    323
* Dislikes: 10
* Testcase Example:  '[[0,1],[1,2],[1,3],[4,2]]\n[[1,3],[0,1],[1,0],[2,4]]\n3'

```md
Alice has an undirected tree with n nodes labeled from 0 to n - 1. The tree is represented as a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
Alice wants Bob to find the root of the tree. She allows Bob to make several guesses about her tree. In one guess, he does the following:

Chooses two distinct integers u and v such that there exists an edge [u, v] in the tree.
He tells Alice that u is the parent of v in the tree.

Bob&#39;s guesses are represented by a 2D integer array guesses where guesses[j] = [uj, vj] indicates Bob guessed uj to be the parent of vj.
Alice being lazy, does not reply to each of Bob&#39;s guesses, but just says that at least k of his guesses are true.
Given the 2D integer arrays edges, guesses and the integer k, return the number of possible nodes that can be the root of Alice&#39;s tree. If there is no such tree, return 0.

Example 1:


Input: edges = [[0,1],[1,2],[1,3],[4,2]], guesses = [[1,3],[0,1],[1,0],[2,4]], k = 3
Output: 3
Explanation:
Root = 0, correct guesses = [1,3], [0,1], [2,4]
Root = 1, correct guesses = [1,3], [1,0], [2,4]
Root = 2, correct guesses = [1,3], [1,0], [2,4]
Root = 3, correct guesses = [1,0], [2,4]
Root = 4, correct guesses = [1,3], [1,0]
Considering 0, 1, or 2 as root node leads to 3 correct guesses.

Example 2:


Input: edges = [[0,1],[1,2],[2,3],[3,4]], guesses = [[1,0],[3,4],[2,1],[3,2]], k = 1
Output: 5
Explanation:
Root = 0, correct guesses = [3,4]
Root = 1, correct guesses = [1,0], [3,4]
Root = 2, correct guesses = [1,0], [2,1], [3,4]
Root = 3, correct guesses = [1,0], [2,1], [3,2], [3,4]
Root = 4, correct guesses = [1,0], [2,1], [3,2]
Considering any node as root will give at least 1 correct guess.


Constraints:

edges.length == n - 1
2 <= n <= 105
1 <= guesses.length <= 105
0 <= ai, bi, uj, vj <= n - 1
ai != bi
uj != vj
edges represents a valid tree.
guesses[j] is an edge of the tree.
guesses is unique.
0 <= k <= guesses.length


```

## 题目翻译

给定一棵无向树（n个节点，编号0~n-1），Bob做了若干猜测 [u,v] 表示他认为u是v的父节点。Alice说至少k个猜测为真。求有多少个节点可以作为树的根节点，使得至少k个猜测正确。

## 解题思路

**换根DP**

1. 将guesses存入HashSet，用于O(1)查询某条有向边是否被猜过。
2. 先以节点0为根，DFS统计正确的猜测数cnt。
3. 换根：从父节点u换到子节点v时，只有边u→v和v→u的猜测状态会变化：
   - 若猜了u→v，则换根后变为错误，cnt--
   - 若猜了v→u，则换根后变为正确，cnt++
4. 对每个节点判断cnt >= k。

时间O(n+guesses)，空间O(n+guesses)。

## Solution

[SourceCode](./solution.js)
