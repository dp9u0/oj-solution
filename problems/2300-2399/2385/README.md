# [2385] Amount of Time for Binary Tree to Be Infected

## Description

[LeetCode Problem Description](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/)

* algorithms
* Medium (65.27%)
* Likes:    3260
* Dislikes: 70
* Testcase Example:  '[1,5,3,null,4,10,6,9,2]\n3'

```md
You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.
Each minute, a node becomes infected if:

The node is currently uninfected.
The node is adjacent to an infected node.

Return the number of minutes needed for the entire tree to be infected.

Example 1:


Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4
Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.

Example 2:


Input: root = [1], start = 1
Output: 0
Explanation: At minute 0, the only node in the tree is infected so we return 0.


Constraints:

The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 105
Each node has a unique value.
A node with a value of start exists in the tree.


```

## 翻译

给定二叉树根节点和起始感染值 start，感染从 start 节点开始每分钟向相邻节点扩散。返回感染整棵树所需的分钟数。

## Approach

转化为从 start 节点出发的最长距离。DFS 后序遍历，返回值表示到 start 的距离（若子树不含 start 则返回深度）。维护全局最大深度 maxDepth，当找到 start 节点时记录当前深度。对于非 start 节点，如果某个子树包含 start，则通过另一子树延伸计算经过 start 的路径长度。

## Solution

[SourceCode](./solution.js)
