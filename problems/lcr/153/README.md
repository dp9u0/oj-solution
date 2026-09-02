# [LCR 153] 二叉树中和为目标值的路径

## Description


```md
https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/description/
* algorithms
* Medium (59.30%)
* Likes:    470
* Dislikes: -
* Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
叶子节点 是指没有子节点的节点。

示例 1：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
示例 2：
输入：root = [1,2,3], targetSum = 5
输出：[]
示例 3：
输入：root = [1,2], targetSum = 0
输出：[]

提示：
树中节点总数在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
注意：本题与主站 113 题相同：https://leetcode.cn/problems/path-sum-ii/

```

## Solution

[SourceCode](./solution.js)

### English Description

Given the `root` of a binary tree and an integer `targetSum`, return all **root-to-leaf** paths where the sum of the node values in the path equals `targetSum`. A **leaf** is a node with no children.

Example 1:
```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
```
Example 2:
```
Input: root = [1,2,3], targetSum = 5
Output: []
```
Example 3:
```
Input: root = [1,2], targetSum = 0
Output: []
```
Constraints:
- The number of nodes in the tree is in the range `[0, 5000]`.
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`
- This problem is the same as LeetCode 113: https://leetcode.com/problems/path-sum-ii/

### 解题思路

DFS + 回溯：
1. 维护一个当前路径 `path` 和累加和 `sum`，从根节点开始深度优先遍历。
2. 每进入一个节点：`path` 压入节点值、`sum` 累加节点值。
3. 若当前节点是叶子（无左右子节点）且 `sum === target`，则把 `path` 的拷贝存入结果。
4. 否则继续递归左右子树；返回前回溯 `path.pop()`，保证不同分支共享同一个数组。

复杂度：O(N) 遍历所有节点（结果数组的空间另计）。


