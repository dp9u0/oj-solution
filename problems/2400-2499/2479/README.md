# [2479] 两个不重叠子树的最大异或值

## Description


```md
https://leetcode.cn/problems/maximum-xor-of-two-non-overlapping-subtrees/description/
* algorithms
* Hard (63.43%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '6\n[[0,1],[0,2],[1,3],[1,4],[2,5]]\n[2,8,3,6,2,5]'
有一个无向树，有 n 个节点，节点标记为从 0 到 n - 1。给定整数 n 和一个长度为 n - 1 的 2 维整数数组 edges，其中 edges[i] = [ai, bi] 表示在树中的节点 ai 和 bi 之间有一条边。树的根节点是标记为 0 的节点。
每个节点都有一个相关联的 值。给定一个长度为 n 的数组 values，其中 values[i] 是第 i 个节点的 值。
选择任意两个 不重叠 的子树。你的 分数 是这些子树中值的和的逐位异或。
返回你能达到的最大分数。如果不可能找到两个不重叠的子树，则返回 0。
注意：
节点的 子树 是由该节点及其所有子节点组成的树。
如果两个子树不共享 任何公共 节点，则它们是 不重叠 的。

示例 1：
输入: n = 6, edges = [[0,1],[0,2],[1,3],[1,4],[2,5]], values = [2,8,3,6,2,5]
输出: 24
解释: 节点 1 的子树的和值为 16，而节点 2 的子树的和值为 8，因此选择这些节点将得到 16 XOR 8 = 24 的分数。可以证明，这是我们能得到的最大可能分数。
示例 2：
输入: n = 3, edges = [[0,1],[1,2]], values = [4,6,1]
输出: 0
解释: 不可能选择两个不重叠的子树，所以我们只返回 0。

提示：
2 <= n <= 5 * 104
edges.length == n - 1
0 <= ai, bi < n
values.length == n
1 <= values[i] <= 109
保证 edges 代表一个有效的树。
Hint 1: Try to build the answer bit by bit from the most significant bit to the least significant.
Hint 2: Use the Trie Data Structure to decide for each bit if it exists in the final answer.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Tree rooted at 0 with values per node. Pick two disjoint subtrees; score = XOR of their value sums. Return the max score (0 if impossible).

Example 1:
Input: n = 6, edges = [[0,1],[0,2],[1,3],[1,4],[2,5]], values = [2,8,3,6,2,5]
Output: 24

Example 2:
Input: n = 3, edges = [[0,1],[1,2]], values = [4,6,1]
Output: 0

Constraints: 2 <= n <= 5 * 10^4, values[i] <= 10^9.

## Approach

Compute subtree sums (fit in doubles, < 2^53 -> 46-bit XOR trie). DFS: when ENTERING node u, query the trie of already-finished subtrees with S[u] (finished subtrees are exactly those disjoint from u's subtree); when u's subtree FINISHES (post-order), insert S[u]. Every disjoint pair is captured at the later-entered root. Iterative DFS to avoid recursion depth issues. O(n * 46).
