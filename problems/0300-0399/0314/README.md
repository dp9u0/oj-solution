# [314] 二叉树的垂直遍历

## Description


```md
https://leetcode.cn/problems/binary-tree-vertical-order-traversal/description/
* algorithms
* Medium (58.13%)
* Likes:    277
* Dislikes: -
* Testcase Example:  '[3,9,20,null,null,15,7]'
给你一个二叉树的根结点，返回其结点按 垂直方向（从上到下，逐列）遍历的结果。
如果两个结点在同一行和列，那么顺序则为 从左到右。

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：[[9],[3,15],[20],[7]]
示例 2：
输入：root = [3,9,8,4,0,1,7]
输出：[[4],[9],[3,0,1],[8],[7]]
示例 3：
输入：root = [1,2,3,4,10,9,11,null,5,null,null,null,null,null,null,null,6]
输出：[[4],[2,5],[1,10,9,6],[3],[11]]

提示：
树中结点的数目在范围 [0, 100] 内
-100 <= Node.val <= 100
Hint 1: Do BFS from the root. Let the root be at column 0. In the BFS, keep in the queue the node and its column.
Hint 2: When you traverse a node, store its value in the column index. For example, the root's value should be stored at index 0.
Hint 3: If the node has a left node, it column should be col - 1. Similarly, if the node has a right node, its column should be col + 1.
Hint 4: At the end, check the minimum and maximum col and output their values.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a binary tree, return the vertical order traversal: nodes grouped by column (root = 0, left = -1, right = +1); within a column, ordered top-to-bottom.

**Example:**
[3,9,20,null,null,15,7] → [[9],[3,15],[20],[7]]

**Constraints:**
- 1 <= nodes <= 100? (practical)

## Approach

BFS 携带列偏移:Map 记录列→值序列(同列天然自上而下),并跟踪 min/max 列;最后按列区间顺序输出。与 987 不同,本题无同列排序要求,BFS 顺序即可。

时间 O(n),空间 O(n)。
