# [LCR 044] 在每个树行中找最大值

## Description


```md
https://leetcode.cn/problems/hPov7L/description/
* algorithms
* Medium (65.69%)
* Likes:    57
* Dislikes: -
* Testcase Example:  '[1,3,2,5,3,null,9]'
给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

示例 1：
输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
解释:
1
/ \
3   2
/ \   \
5   3   9
示例 2：
输入: root = [1,2,3]
输出: [1,3]
解释:
1
/ \
2   3
示例 3：
输入: root = [1]
输出: [1]
示例 4：
输入: root = [1,null,2]
输出: [1,2]
解释:
1
\
2
示例 5：
输入: root = []
输出: []

提示：
二叉树的节点个数的范围是 [0,104]
-231 <= Node.val <= 231 - 1

注意：本题与主站 515 题相同： https://leetcode.cn/problems/find-largest-value-in-each-tree-row/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the `root` of a binary tree, find the largest value in **each row** (level) of the tree.

**Example 1:** Input `root = [1,3,2,5,3,null,9]` → Output `[1,3,9]`
**Example 2:** Input `root = [1,2,3]` → Output `[1,3]`
**Example 3:** Input `root = [1]` → Output `[1]`
**Example 4:** Input `root = [1,null,2]` → Output `[1,2]`
**Example 5:** Input `root = []` → Output `[]`

**Constraints:** node count in `[0, 10^4]`, `-2^31 <= Node.val <= 2^31 - 1`.

Note: same as LeetCode 515.

---

## Approach

**BFS level-order traversal.** Process the tree one level at a time using a queue; for each level track the maximum node value and push it to the result. Because a level can contain up to `10^4` nodes, iterate with a count of nodes currently in the queue to separate levels.

Complexity: `O(n)` time, `O(n)` space (queue).
