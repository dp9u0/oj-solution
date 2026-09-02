# [LCR 175] 计算二叉树的深度

## Description


```md
https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/description/
* algorithms
* Easy (79.12%)
* Likes:    281
* Dislikes: -
* Testcase Example:  '[1,2,2,3,null,null,5,4,null,null,4]'
某公司架构以二叉树形式记录，请返回该公司的层级数。

示例 1：
输入：root = [1, 2, 2, 3, null, null, 5, 4, null, null, 4]
输出: 4
解释: 上面示例中的二叉树的最大深度是 4，沿着路径 1 -> 2 -> 3 -> 4 或 1 -> 2 -> 5 -> 4 到达叶节点的最长路径上有 4 个节点。

提示：
节点总数 <= 10000
注意：本题与主站 104 题相同：https://leetcode.cn/problems/maximum-depth-of-binary-tree/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A company's structure is recorded as a binary tree. Return the number of levels (i.e., the maximum depth) of the company.

Example 1:
Input: root = [1, 2, 2, 3, null, null, 5, 4, null, null, 4]
Output: 4
Explanation: The maximum depth of the binary tree in the example above is 4. The longest path from the root to a leaf node has 4 nodes, along 1 -> 2 -> 3 -> 4 or 1 -> 2 -> 5 -> 4.

Constraints:
- The total number of nodes is at most 10000.

Note: This problem is the same as LeetCode 104 (Maximum Depth of Binary Tree).

## Approach

Recursive DFS (divide and conquer):

- Base case: if the root is null, the depth is 0.
- Otherwise, the maximum depth of the tree is `1 + max(depth(root.left), depth(root.right))`.
- Compute the depth of the left and right subtrees recursively, take the larger one, and add 1 for the current root node.

Time complexity: O(n), where n is the number of nodes — each node is visited once.
Space complexity: O(height) — the recursion stack depth is the height of the tree, worst case O(n) for a skewed tree.
