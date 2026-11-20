# [1740] 找到二叉树中的距离

## Description


```md
https://leetcode.cn/problems/find-distance-in-a-binary-tree/description/
* algorithms
* Medium (69.88%)
* Likes:    29
* Dislikes: -
* Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n0'
给定一棵二叉树的根节点 root 以及两个整数 p 和 q ，返回该二叉树中值为 p 的结点与值为 q 的结点间的 距离 。
两个结点间的 距离 就是从一个结点到另一个结点的路径上边的数目。

示例 1：
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 0
输出：3
解释：在 5 和 0 之间有 3 条边：5-3-1-0
示例 2：
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 7
输出：2
解释：在 5 和 7 之间有 2 条边：5-2-7
示例 3：
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 5
输出：0
解释：一个结点与它本身之间的距离为 0

提示：
树中结点个数的范围在 [1, 104].
0 <= Node.val <= 109
树中所有结点的值都是唯一的.
p 和q 是树中结点的值.
Hint 1: Get the LCA of p and q.
Hint 2: The answer is the sum of distances between p-LCA and q-LCA

```

## Solution

[SourceCode](./solution.js)

## Translation

Distance (edge count) between values p and q in a binary tree (0 if equal).

## Approach

**父映射 + 双指针上行**。BFS 建 child→parent 与深度表;p、q 两指针向根走,深者先走,计步至相遇——步数即经 LCA 的总距离。O(n)。
