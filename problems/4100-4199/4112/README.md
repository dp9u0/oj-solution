# [4112] 将子树置零后的最大得分

## Description


```md
https://leetcode.cn/problems/maximize-score-after-zeroing-subtrees/description/
* algorithms
* Medium (66.10%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[-1,0,0,0,1,2,3,3]\r\n[1,1,0,0,1,1,0,1]\r\n[5,6,1,2,3,2,3,-3]\r'
给你一个长度为 n 的整数数组 parent，表示一棵节点编号从 0 到 n - 1 的有根树，其中 parent[i] 表示节点 i 的父节点。树的根节点为节点 0，因此 parent[0] = -1。
另给你两个长度均为 n 的整数数组 op 和 score，其中 op[i] 决定节点 i 允许执行的操作，score[i] 表示该节点的分数。
你需要按照以下规则处理每个 非叶节点 i：
如果 op[i] = 0，你可以选择节点 i 的 至多 一个子节点，并将以该子节点为根的 子树 中所有节点的分数设为 0。
如果 op[i] = 1，你必须选择节点 i 的 恰好 一个子节点，并将以该子节点为根的子树中所有节点的分数设为 0。
每个非叶节点都必须恰好处理一次。你可以按任意顺序处理这些节点。
返回执行这些操作后，所有节点分数之和的 最大可能值。
叶节点 是没有子节点的节点。
以某个节点为根的 子树 由该节点及其所有后代节点组成。

示例 1：
​​​​​​​
输入： parent = [-1,0,0,0,1,2,3,3], op = [1,1,0,0,1,1,0,1], score = [5,6,1,2,3,2,3,-3]
输出： 16
解释：
一种最优方案是按以下顺序处理节点：
节点 4、5、6 和 7：它们都是叶节点，因此不对它们执行任何操作。
节点 1：由于 op[1] = 1，我们必须选择它的一个子节点。选择节点 4，将以它为根的子树中所有节点（节点 4）的分数设为 0。
节点 2：由于 op[2] = 0，我们可以选择一个子节点，也可以不执行任何操作。对于该节点，我们不执行任何操作。
节点 3：由于 op[3] = 0，我们可以选择一个子节点，也可以不执行任何操作。选择节点 7，将以它为根的子树中所有节点（节点 7）的分数设为 0。
节点 0：由于 op[0] = 1，我们必须选择它的一个子节点。选择节点 2，将以它为根的子树中所有节点（节点 2 和 5）的分数设为 0。
执行这些操作后，各节点的分数为 [5, 6, 0, 2, 0, 0, 3, 0]，总和为 16。
不存在能够得到更大分数总和的合法操作序列。因此，答案为 16。
示例 2：
​​​​​​​
输入： parent = [-1,0,0], op = [0,0,0], score = [1,2,3]
输出： 6
解释：
我们只需要处理节点 0，因为节点 1 和节点 2 都是叶节点。
由于 op[0] = 0，我们可以选择不执行任何操作。
因此，所有节点的分数都得以保留，得到的最大分数总和为 6。
示例 3：
​​​​​​​
输入： parent = [-1], op = [1], score = [-10]
输出： -10
解释：
树中唯一的节点是叶节点，因此无法对任何节点执行操作。
因此，最大分数总和为 -10。

提示：
1 <= n <= 105
n == parent.length == op.length == score.length
parent[0] == -1
对于所有 i 在 [1, n - 1] 范围内，均有 0 <= parent[i] <= n - 1
0 <= op[i] <= 1
-104 <= score[i] <= 104
输入保证数组 parent 表示一棵以节点 0 为根的合法树。
Hint 1: Process each node after its children. Let dp[u] be the best score the subtree rooted at u can contribute if no ancestor zeros it. For a leaf, dp[u] = score[u].
Hint 2: Start with score[u] plus the sum of the children's contributions. Zeroing the subtree of child v subtracts dp[v] from that total. Which child would you choose?
Hint 3: If the operation is required, subtract the smallest child contribution. If it is optional, subtract that contribution only when it is negative. The answer is dp[0].

```

## Description (English)

Given an integer array `parent` of length `n` representing a rooted tree with nodes `0` to `n-1` (`parent[i]` is the parent of node `i`, root is `0`, `parent[0] = -1`). Also given arrays `op` and `score` of length `n`. Every **non-leaf** node `i` must be processed exactly once:

- If `op[i] = 0`, you may choose **at most one** child of `i` and set all scores in that child's subtree to 0.
- If `op[i] = 1`, you **must** choose exactly one child of `i` and set all scores in that child's subtree to 0.

Return the maximum possible sum of all node scores. Constraints: `n <= 1e5`, `-1e4 <= score[i] <= 1e4`.

## Approach

树形 DP。定义 `dp[u]`:在没有祖先置零 `u` 的前提下,以 `u` 为根的子树能贡献的最大分数。

- 叶节点:`dp[u] = score[u]`。
- 非叶节点:先取 `base = score[u] + sum(dp[child])`。置零某个子树 `v` 等价于从总和里减去 `dp[v]`,为最大化应减去**最小的**子贡献 `minDp`:
  - `op[u] = 1`(必须选一个):`dp[u] = base - minDp`;
  - `op[u] = 0`(可选):只在 `minDp < 0` 时才操作,`dp[u] = base - min(0, minDp)`。

答案为 `dp[0]`。n 达 1e5,用 BFS 序(父先于子)倒序迭代避免递归爆栈,整体 O(n)。

## Solution

[SourceCode](./solution.js)
