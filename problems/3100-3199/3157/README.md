# [3157] 找到具有最小和的树的层数

## Description


```md
https://leetcode.cn/problems/find-the-level-of-tree-with-minimum-sum/description/
* algorithms
* Medium (29.98%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[50,6,2,30,80,7]'
给定一棵二叉树的根 root，其中每个节点有一个值，返回树中 层和最小 的层数（如果相等，返回 最低 的层数）。
注意 树的根节点在第一层，其它任何节点的层数是它到根节点的距离+1。

示例 1：
输入：root = [50,6,2,30,80,7]
输出：2
解释：
示例 2：
输入：root = [36,17,10,null,null,24]
输出：3
解释：
示例 3：
输入：root = [5,null,5,null,5]
输出：1
解释：

提示：
树中节点数量的范围是 [1, 105]。
1 <= Node.val <= 109
Hint 1: Run a DFS on the tree and update an array sum where sum[i] is the sum for level i.
Hint 2: The answer is the first minimum element of sum.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Return the smallest 1-indexed level whose node-value sum is minimal.

Approach: BFS level by level accumulating sums; answer = first index of the minimum. Iterative to be safe at n = 1e5. O(n).

Verified: [50,6,2,30,80,7] -> 2; [36,17,10,null,null,24] -> 3; [5,null,5,null,5] -> 1.
