# [1522] N 叉树的直径

## Description


```md
https://leetcode.cn/problems/diameter-of-n-ary-tree/description/
* algorithms
* Medium (73.62%)
* Likes:    48
* Dislikes: -
* Testcase Example:  '[1,null,3,2,4,null,5,6]'
给定一棵 N 叉树 的根节点 root ，计算这棵树的直径长度。
N 叉树的直径指的是树中任意两个节点间路径中 最长 路径的长度。这条路径可能经过根节点，也可能不经过根节点。
（N 叉树的输入序列以层序遍历的形式给出，每组子节点用 null 分隔）

示例 1：
输入：root = [1,null,3,2,4,null,5,6]
输出：3
解释：直径如图中红线所示。
示例 2：
输入：root = [1,null,2,null,3,4,null,5,null,6]
输出：4
示例 3：
输入: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出: 7

提示：
N 叉树的深度小于或等于 1000 。
节点的总个数在 [0, 10^4] 间。
Hint 1: For the node i, calculate the height of each of its children and keep the first and second maximum heights (max1_i , max2_i).
Hint 2: Check all nodes and return max( 2 + max1_i  +  max2_i ).

```

## Solution

[SourceCode](./solution.js)

## Translation

Diameter (longest path edge count) of an N-ary tree; may not pass the root. Root may be null (0 nodes).

## Approach

**DFS 前两深**。递归返回子树深度;每个节点维护孩子深度的最大值 max1 与次大值 max2,直径候选 = max1 + max2(经该节点的最长路径),全局取 max。空树返 0。O(n)。
