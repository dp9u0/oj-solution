# [104] Maximum Depth of Binary Tree

## Description

* algorithms
* Easy (58.05%)
* Source Code:       solving\104.js
* Total Accepted:    418.6K
* Total Submissions: 721.2K
* Testcase Example:  '[3,9,20,null,null,15,7]'

```md
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.
Example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

```

## Solution

递归 `1 + Math.max(maxDepth(root.left), maxDepth(root.right)`

[SourceCode](./solution.js)