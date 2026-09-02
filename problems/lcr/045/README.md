# [LCR 045] 找树左下角的值

## Description


```md
https://leetcode.cn/problems/LwUNpT/description/
* algorithms
* Medium (78.75%)
* Likes:    58
* Dislikes: -
* Testcase Example:  '[2,1,3]'
给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
假设二叉树中至少有一个节点。

示例 1：
输入: root = [2,1,3]
输出: 1
示例 2：

输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7

提示：
二叉树的节点个数的范围是 [1,104]
-231 <= Node.val <= 231 - 1

注意：本题与主站 513 题相同： https://leetcode.cn/problems/find-bottom-left-tree-value/

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given the root node of a binary tree, find the value of the leftmost node in the bottom (last) level.

Assume the binary tree has at least one node.

Example 1:
```
Input: root = [2,1,3]
Output: 1
```

Example 2:
```
Input: [1,2,3,4,null,5,6,null,null,7]
Output: 7
```

Constraints:
- The number of nodes in the tree is in the range [1, 10^4].
- -2^31 <= Node.val <= 2^31 - 1

Note: This problem is the same as LeetCode 513 (https://leetcode.com/problems/find-bottom-left-tree-value/).

## Approach

**BFS (level-order traversal)**

Perform a level-order traversal using a queue. For each level, record the value of its first (leftmost) node. When the traversal ends, the last recorded value is exactly the value of the leftmost node in the deepest level.

Steps:
1. Initialize a queue with the root node, and `result = root.val`.
2. While the queue is not empty, process the current level:
   - Update `result` with the value of the first node of this level.
   - Push all children of the current level into the queue.
3. Return `result`.

- Time complexity: O(n), each node is visited once.
- Space complexity: O(n), the queue holds at most one level of nodes.
