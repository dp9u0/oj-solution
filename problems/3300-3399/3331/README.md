# [3331] 修改后子树的大小

## Description


```md
https://leetcode.cn/problems/find-subtree-sizes-after-changes/description/
* algorithms
* Medium (42.42%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '[-1,0,0,1,1,1]\n"abaabc"'
给你一棵 n 个节点且根节点为编号 0 的树，节点编号为 0 到 n - 1 。这棵树用一个长度为 n 的数组 parent 表示，其中 parent[i] 是第 i 个节点的父亲节点的编号。由于节点 0 是根，parent[0] == -1 。
给你一个长度为 n 的字符串 s ，其中 s[i] 是节点 i 对应的字符。
对于节点编号从 1 到 n - 1 的每个节点 x ，我们 同时 执行以下操作 一次 ：
找到距离节点 x 最近 的祖先节点 y ，且 s[x] == s[y] 。
如果节点 y 不存在，那么不做任何修改。
否则，将节点 x 与它父亲节点之间的边 删除 ，在 x 与 y 之间连接一条边，使 y 变为 x 新的父节点。
请你返回一个长度为 n 的数组 answer ，其中 answer[i] 是 最终 树中，节点 i 为根的 子树 的 大小 。

示例 1：
输入：parent = [-1,0,0,1,1,1], s = "abaabc"
输出：[6,3,1,1,1,1]
解释：
节点 3 的父节点从节点 1 变为节点 0 。
示例 2：
输入：parent = [-1,0,4,0,1], s = "abbba"
输出：[5,2,1,1,1]
解释：
以下变化会同时发生：
节点 4 的父节点从节点 1 变为节点 0 。
节点 2 的父节点从节点 4 变为节点 1 。

提示：
n == parent.length == s.length
1 <= n <= 105
对于所有的 i >= 1 ，都有 0 <= parent[i] <= n - 1 。
parent[0] == -1
parent 表示一棵合法的树。
s 只包含小写英文字母。
Hint 1: Perform a depth-first search on the tree, starting from the root.
Hint 2: During the DFS, keep track of the most recent node where each character from 'a' to 'z' has been seen.

```

## Description (English)

You are given a tree with `n` nodes rooted at node `0`, nodes numbered `0` to `n - 1`, represented by an array `parent` where `parent[i]` is the parent of node `i` (`parent[0] == -1`).

You are also given a string `s` of length `n`, where `s[i]` is the character of node `i`.

For each node `x` from `1` to `n - 1`, we **simultaneously** perform the following operation exactly once:

- Find the **closest** ancestor `y` of node `x` such that `s[x] == s[y]`.
- If no such node `y` exists, do nothing.
- Otherwise, remove the edge between `x` and its parent, and connect an edge between `x` and `y`, making `y` the new parent of `x`.

Return an array `answer` of length `n` where `answer[i]` is the **size** of the subtree rooted at node `i` in the **final** tree.

## Approach

关键观察：重挂接操作依据的是**原树**上的最近同字符祖先，且所有操作同时进行，因此各节点的新父亲互不影响，可以先在原树上一次性求出所有新父亲。

1. 在原树上从根开始 DFS，维护 `last[26]`：记录当前根到节点路径（祖先链）上每个字符**最近**出现的节点编号。
2. 进入节点 `x` 时，`last[s[x]]` 即为 `x` 的最近同字符祖先 `y`；若存在（不为 -1），则 `newParent[x] = y`，否则保持原父亲。
3. 由于 `y` 是 `x` 在原树上的祖先，在原树 DFS 的 preorder 序中 `y` 一定出现在 `x` 之前，且新树仍是以 0 为根的合法树。按 preorder **逆序**（保证先处理子节点）累加子树大小：`size` 初始全 1，`size[newParent[x]] += size[x]`。

复杂度：时间 O(n)，空间 O(n)。DFS 用显式栈实现（n 可达 1e5），进入/离开节点时保存并恢复 `last[c]`。

## Solution

[SourceCode](./solution.js)
