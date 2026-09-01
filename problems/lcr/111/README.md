# [LCR 111] 除法求值

## Description


```md
https://leetcode.cn/problems/vlzXQL/description/
* algorithms
* Medium (64.84%)
* Likes:    54
* Dislikes: -
* Testcase Example:  '[["a","b"],["b","c"]]\n' +
'[2.0,3.0]\n' +
'[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]'
给定一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。
返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。
注意：输入总是有效的。可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

示例 1：
输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
解释：
条件：a / b = 2.0, b / c = 3.0
问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
示例 2：
输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
输出：[3.75000,0.40000,5.00000,0.20000]
示例 3：
输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
输出：[0.50000,2.00000,-1.00000,-1.00000]

提示：
1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[i].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj 由小写英文字母与数字组成

注意：本题与主站 399 题相同： https://leetcode.cn/problems/evaluate-division/

```

## English Translation

```md
You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [Ai, Bi]` and `values[i]` together represent the equation `Ai / Bi = values[i]`. Each `Ai` or `Bi` is a string representing a single variable.

There are also some queries represented as an array `queries`, where `queries[j] = [Cj, Dj]` represents the j-th question: determine the result of `Cj / Dj = ?` based on the given information.

Return the answers to all queries. If an answer cannot be determined, use `-1.0` in its place. If the query references a string that does not appear in the given equations, use `-1.0` as well.

Note: The input is always valid. You may assume that no division by zero will occur and there are no contradictory results.

Example 1:
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]

Example 2:
Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]

Example 3:
Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]

Constraints:
1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[i].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj consist of lowercase English letters and digits.
```

## Approach

### 思路 (Approach)

将每个变量视为带权图中的一个节点。对每条等式 `Ai / Bi = values[i]`:

- 建立有向边 `Ai → Bi`,权重为 `values[i]`,表示 `Ai / Bi = values[i]`;
- 同时建立反向边 `Bi → Ai`,权重为 `1 / values[i]`,表示 `Bi / Ai = 1 / values[i]`。

对每个查询 `[Cj, Dj]`:

- 若 `Cj` 或 `Dj` 不在图中,返回 `-1.0`;
- 若 `Cj === Dj`,返回 `1.0`;
- 否则用 **DFS/BFS** 在图上搜索从 `Cj` 到 `Dj` 的路径,路径上所有边的权重相乘即为答案。若不可达,返回 `-1.0`。

由于变量数量 ≤ 40(每个等式两个变量,≤ 20 条等式),图很小,对每个查询单独 DFS 完全可行。每次搜索需标记已访问节点避免死循环。

复杂度:图节点数 `N ≤ 40`,对每个查询 DFS 最坏 `O(N)`,总复杂度 `O(Q * N)`,Q 为查询数(≤ 20),非常高效。

## Solution

[SourceCode](./solution.js)
