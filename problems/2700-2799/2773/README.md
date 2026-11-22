# [2773] 特殊二叉树的高度

## Description


```md
https://leetcode.cn/problems/height-of-special-binary-tree/description/
* algorithms
* Medium (39.43%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[1,2,3,null,null,4,5]'
给定一棵具有 n 个节点的 特殊 二叉树的根节点 root 。特殊二叉树的节点编号从 1 到 n 。假设这棵树有 k 个叶子，顺序如下：b1 < b2 < ... < bk 。
这棵树的叶子节点有一个 特殊 属性 ！对于每个叶子节点 bi ，满足以下条件：
如果 i < k ，则 bi 的右子节点为 bi + 1 ；否则为 b1 。
如果 i > 1 ，则 bi 的左子节点为 bi - 1 ；否则为 bk 。
返回给定树的高度。
注意：二叉树的高度是指从根节点到任何其他节点的 最长路径 的长度。

示例 1;
输入：root = [1,2,3,null,null,4,5]
输出：2
解释：给定树如下图所示。每个叶子节点的左子节点是它左边的叶子节点（用蓝色边表示）。每个叶子节点的右子节点是它右边的叶子节点（用红色边表示）。我们可以看出，该图的高度为2。
示例 2：
输入：root = [1,2]
输出：1
解释：给定树如下图所示。只有一个叶子节点，所以它没有左子节点或右子节点。我们可以看出，该图的高度为 1。
示例 3：
输入：root = [1,2,3,null,null,4,null,5,6]
输出：3
解释：给定树如下图所示。每个叶子节点的左子节点是它左边的叶子节点（用蓝色边表示）。每个叶子节点的右子节点是它右边的叶子节点（用红色边表示）。我们可以看出，该图的高度为3。

提示：
n 为树中节点的数量
2 <= n <= 104
1 <= node.val <= n
输入保证每个 node.val 的值是唯一的。
Hint 1: To solve the problem, we must first distinguish leaves from internal nodes.
Hint 2: For some node v, if v.left == null or v.right == null, then v is not a leaf.
Hint 3: If the previous condition does not hold, and v.left.right == v, then v is a leaf node.
Hint 4: Now that we can check if some node is a leaf, we can make the function “heightOfTree” a recursive function that returns the tree's height in which its input is the root of that subtree.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): A "special" binary tree where the leaves (ordered b1 < b2 < ... < bk) are linked in a ring through their left/right pointers (b_i.right = b_{i+1}, b_i.left = b_{i-1}, cyclically). Compute the tree height (longest root-to-node path edge count). Non-null left/right therefore does NOT imply a real child.

Approach: distinguish leaves first — v is a leaf iff v.left and v.right are non-null and v.left.right === v (its left neighbor's right pointer comes back to v; an internal node's child never points back to its parent). Then BFS from the root, expanding only non-leaf nodes' non-null children, tracking depth; answer = max depth. Iterative BFS avoids recursion-depth issues at n = 1e4.

Complexity: O(n) time, O(n) space.
