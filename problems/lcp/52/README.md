# [LCP 52] 二叉搜索树染色

## Description


```md
https://leetcode.cn/problems/QO5KpG/description/
* algorithms
* Medium (31.72%)
* Likes:    34
* Dislikes: -
* Testcase Example:  '[1,null,2,null,3,null,4,null,5]\n[[1,2,4],[1,1,3],[0,3,5]]'
欢迎各位勇者来到力扣城，本次试炼主题为「二叉搜索树染色」。
每位勇士面前设有一个**二叉搜索树**的模型，模型的根节点为 `root`，树上的各个节点值均不重复。初始时，所有节点均为蓝色。现在按顺序对这棵二叉树进行若干次操作， `ops[i] = [type, x, y]` 表示第 `i` 次操作为：
+ `type` 等于 0 时，将节点值范围在 `[x, y]` 的节点均染蓝
+ `type` 等于 1 时，将节点值范围在 `[x, y]` 的节点均染红
请返回完成所有染色后，该二叉树中红色节点的数量。
**注意：**
+ 题目保证对于每个操作的 `x`、`y` 值定出现在二叉搜索树节点中
**示例 1：**
>输入：`root = [1,null,2,null,3,null,4,null,5], ops = [[1,2,4],[1,1,3],[0,3,5]]`
>
>输出：`2`
>
>解释：
>第 0 次操作，将值为 2、3、4 的节点染红；
>第 1 次操作，将值为 1、2、3 的节点染红；
>第 2 次操作，将值为 3、4、5 的节点染蓝；
>因此，最终值为 1、2 的节点为红色节点，返回数量 2
![image.png](https://pic.leetcode.cn/1649833948-arSlXd-image.png){:width=230px}
**示例 2：**
>输入：`root = [4,2,7,1,null,5,null,null,null,null,6]`
>`ops = [[0,2,2],[1,1,5],[0,4,5],[1,5,7]]`
>
>输出：`5`
>
>解释：
>第 0 次操作，将值为 2 的节点染蓝；
>第 1 次操作，将值为 1、2、4、5 的节点染红；
>第 2 次操作，将值为 4、5 的节点染蓝；
>第 3 次操作，将值为 5、6、7 的节点染红；
>因此，最终值为 1、2、5、6、7 的节点为红色节点，返回数量 5
![image.png](https://pic.leetcode.cn/1649833763-BljEbP-image.png){:width=230px}
**提示：**
+ `1 <= 二叉树节点数量 <= 10^5`
+ `1 <= ops.length <= 10^5`
+ `ops[i].length == 3`
+ `ops[i][0]` 仅为 `0` or `1`
+ `0 <= ops[i][1] <= ops[i][2] <= 10^9`
+ `0 <= 节点值 <= 10^9`

```

## English Description

Welcome to LeetCode City. In this challenge, the theme is "Binary Search Tree Coloring".

Each warrior is given a **binary search tree** model whose root is `root`, and all node values are distinct. Initially, every node is colored blue. A sequence of operations is applied in order: `ops[i] = [type, x, y]` denotes the `i`-th operation:

+ When `type` equals `0`, color every node whose value is in range `[x, y]` blue
+ When `type` equals `1`, color every node whose value is in range `[x, y]` red

Return the number of red nodes in the tree after all operations are completed.

**Note:**
+ The problem guarantees that for every operation, both `x` and `y` exist among the BST node values.

**Example 1:**
>Input: `root = [1,null,2,null,3,null,4,null,5], ops = [[1,2,4],[1,1,3],[0,3,5]]`
>
>Output: `2`
>
>Explanation:
>Operation 0 colors nodes with values 2, 3, 4 red;
>Operation 1 colors nodes with values 1, 2, 3 red;
>Operation 2 colors nodes with values 3, 4, 5 blue;
>Thus nodes with values 1, 2 are red in the end, returning 2.

**Example 2:**
>Input: `root = [4,2,7,1,null,5,null,null,null,null,6]`, `ops = [[0,2,2],[1,1,5],[0,4,5],[1,5,7]]`
>
>Output: `5`

**Constraints:**
+ `1 <= number of nodes <= 10^5`
+ `1 <= ops.length <= 10^5`
+ `ops[i].length == 3`
+ `ops[i][0]` is `0` or `1`
+ `0 <= ops[i][1] <= ops[i][2] <= 10^9`
+ `0 <= node value <= 10^9`

## Approach

**Observation:** A node's final color is determined by the **last** operation whose range covers its value. So process `ops` from back to front: for each operation, only nodes not yet colored are touched, and they all get that operation's color (1 → red, 0 → blue).

**Key idea — skip already-colored nodes with a union-find "next pointer":**
1. Collect all BST node values and sort them into array `vals`. Since values are distinct, each `[x, y]` range maps to a contiguous subarray of `vals` (locate via binary search).
2. Use a union-find `parent` array where `find(i)` returns the smallest index `>= i` whose node is **not yet colored** (or `n` when exhausted).
3. Scan `ops` from the end. For an operation `[type, x, y]`, walk from `find(lo)` through indices `<= hi`, marking each node's color; after coloring index `i`, union it to `i + 1` so it is skipped later.
4. Count only red (type 1) colorings.

**Complexity:** O((n + m) log n) for binary searches + near-O(α) per colored node; each node is colored exactly once, so total work is O(n + m log n). Space O(n).

## Solution

[SourceCode](./solution.js)
