# [1214] 查找两棵二叉搜索树之和

## Description


```md
https://leetcode.cn/problems/two-sum-bsts/description/
* algorithms
* Medium (69.19%)
* Likes:    64
* Dislikes: -
* Testcase Example:  '[2,1,4]\n[1,0,3]\n5'
给出两棵二叉搜索树的根节点 root1 和 root2 ，请你从两棵树中各找出一个节点，使得这两个节点的值之和等于目标值 Target。
如果可以找到返回 True，否则返回 False。

示例 1：
输入：root1 = [2,1,4], root2 = [1,0,3], target = 5
输出：true
解释：2 加 3 和为 5 。
示例 2：
输入：root1 = [0,-10,10], root2 = [5,1,7,0,2], target = 18
输出：false

提示：
每棵树上节点数在 [1, 5000] 范围内。
-109 <= Node.val, target <= 109
Hint 1: How can you reduce this problem to the classical Two Sum problem?
Hint 2: Do an in-order traversal of each tree to convert them to sorted arrays.
Hint 3: Solve the classical Two Sum problem.

```

## Solution

[SourceCode](./solution.js)

## Translation

Given two BSTs and target, determine whether there exist one node in each tree whose values sum to target.

- Example: root1 = [2,1,4], root2 = [1,0,3], target = 5 → `true` (2 + 3)

## Approach

**中序展开 + 对撞双指针**。两棵 BST 各做中序遍历得升序数组;a1 从头、a2 从尾相向移动,和小于 target 前进 i,大于后退 j。O(n + m)。
