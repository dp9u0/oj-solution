# [272] 最接近的二叉搜索树值 II

## Description


```md
https://leetcode.cn/problems/closest-binary-search-tree-value-ii/description/
* algorithms
* Hard (66.51%)
* Likes:    179
* Dislikes: -
* Testcase Example:  '[4,2,5,1,3]\n3.714286\n2'
给定二叉搜索树的根 root 、一个目标值 target 和一个整数 k ，返回BST中最接近目标的 k 个值。你可以按 任意顺序 返回答案。
题目 保证 该二叉搜索树中只会存在一种 k 个值集合最接近 target

示例 1：
输入: root = [4,2,5,1,3]，目标值 = 3.714286，且 k = 2
输出: [4,3]
示例 2:
输入: root = [1], target = 0.000000, k = 1
输出: [1]

提示：
二叉树的节点总数为 n
1 <= k <= n <= 104
0 <= Node.val <= 109
-109 <= target <= 109

进阶：假设该二叉搜索树是平衡的，请问您是否能在小于 O(n)（ n = total nodes ）的时间复杂度内解决该问题呢？
Hint 1: Consider implement these two helper functions:
getPredecessor(N), which returns the next smaller node to N.
getSuccessor(N), which returns the next larger node to N.
Hint 2: Try to assume that each node has a parent pointer, it makes the problem much easier.
Hint 3: Without parent pointer we just need to keep track of the path from the root to the current node using a stack.
Hint 4: You would need two stacks to track the path in finding predecessor and successor node separately.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given the `root` of a BST, a floating `target`, and integer `k`, return the `k` values in the tree closest to `target` (any order).

**Example:**
root = [4,2,5,1,3], target = 3.714286, k = 2 → [3,4]

**Constraints:**
- 1 <= nodes <= 10^4, values unique

## Approach

中序遍历得到有序数组,双指针维护大小为 k 的窗口:每次比较两端到 target 的距离,丢弃较远的一端(O(n) 空间;后继/前驱双栈法可省中序数组)。

时间 O(n),空间 O(n)。
