# [298] 二叉树最长连续序列

## Description


```md
https://leetcode.cn/problems/binary-tree-longest-consecutive-sequence/description/
* algorithms
* Medium (60.84%)
* Likes:    143
* Dislikes: -
* Testcase Example:  '[1,null,3,2,4,null,null,null,5]'
给你一棵指定的二叉树的根节点 root ，请你计算其中 最长连续序列路径 的长度。
最长连续序列路径 是依次递增 1 的路径。该路径，可以是从某个初始节点到树中任意节点，通过「父 - 子」关系连接而产生的任意路径。且必须从父节点到子节点，反过来是不可以的。

示例 1：
输入：root = [1,null,3,2,4,null,null,null,5]
输出：3
解释：当中，最长连续序列是 3-4-5 ，所以返回结果为 3 。
示例 2：
输入：root = [2,null,3,2,null,1]
输出：2
解释：当中，最长连续序列是 2-3 。注意，不是 3-2-1，所以返回 2 。

提示：
树中节点的数目在范围 [1, 3 * 104] 内
-3 * 104 <= Node.val <= 3 * 104

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given the `root` of a binary tree, return the length of the longest consecutive path (parent value + 1 = child value, downward only).

**Example:**
root = [1,null,3,2,4,null,null,null,5] → 3 (3->4->5)

**Constraints:**
- 1 <= number of nodes <= 10^4? (practical), values unique

## Approach

自顶向下 DFS:携带"以当前节点结尾的连续序列长度"下行——孩子值等于当前值 +1 则长度 +1,否则重置为 1;沿途取最大值。

时间 O(n),空间 O(h)。
