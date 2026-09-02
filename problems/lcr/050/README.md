# [LCR 050] 路径总和 III

## Description


```md
https://leetcode.cn/problems/6eUYwP/description/
* algorithms
* Medium (48.82%)
* Likes:    117
* Dislikes: -
* Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

示例 1：
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
示例 2：
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3

提示:
二叉树的节点个数的范围是 [0,1000]
-109 <= Node.val <= 109
-1000 <= targetSum <= 1000

注意：本题与主站 437 题相同：https://leetcode.cn/problems/path-sum-iii/

```

## Solution

[SourceCode](./solution.js)

### English Description

Given the `root` of a binary tree and an integer `targetSum`, return the number of paths where the sum of the values along the path equals `targetSum`.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., only from parent nodes to child nodes).

**Example 1:**
```
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
```

**Example 2:**
```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 1000]`.
- `-10^9 <= Node.val <= 10^9`
- `-1000 <= targetSum <= 1000`

> This problem is the same as LeetCode 437: Path Sum III.

### Approach (中文思路)

**前缀和 + DFS 回溯 (Prefix Sum + DFS with Backtracking)**

- 路径必须是向下的单条链的一段，等价于「从某个祖先节点到当前节点这一段的和 = targetSum」。
- DFS 遍历时维护「从根到当前节点的前缀和」`prefix`，并借助哈希表统计各前缀和出现次数。
- 对当前节点，若有 `prefix - targetSum` 出现在哈希表中，说明此前缀和所在的节点到当前节点这一段和为 `targetSum`，累加次数即可。
- 初始化 `map[0] = 1`（空前缀），这样「从根出发的整条链」也能被正确计数。
- 回溯：进入节点时 `map[prefix]++`，离开节点（DFS 返回前）`map[prefix]--`，保证左右子树互不干扰。
- 时间 O(n)，空间 O(height)。

> 注意：若只统计单个节点/链的局部情况，用该前缀和法可避免 O(n²) 的暴力枚举所有祖先后代对。
